/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import {
	Logger, logger,
	LoggingDebugSession,
	InitializedEvent, TerminatedEvent, StoppedEvent, BreakpointEvent, OutputEvent,
	ProgressStartEvent, ProgressUpdateEvent, ProgressEndEvent,
	Thread, StackFrame, Scope, Source, Handles, Breakpoint, Variable
} from 'vscode-debugadapter';
import { DebugProtocol } from 'vscode-debugprotocol';
import { basename } from 'path';
import { VenusBreakpoint, VenusRuntime } from './venusRuntime';
import { workspace, languages, Disposable, window, ViewColumn, TextEditor, commands, Uri, TextDocument } from 'vscode';
import { riscvDisassemblyProvider } from './assemblyView';
import { DisassemblyDecoratorProvider } from './assemblyDecorator';
import { VenusRenderer } from './venusRenderer';
import { VenusLedMatrixUI, Color } from './ledmatrix/venusLedMatrixUI';
import { VenusRobotUI } from './robot/venusRobotUI';
import { MemoryUI } from './memoryui/memoryUI';
const { Subject } = require('await-notify');

const riscvAsmScheme = 'venus_asm';

const regNames = new Map([
	["0", "zero"],
	["1", "ra"],
	["2", "sp"],
	["3", "gp"],
	["4", "tp"],
	["5", "t0"],
	["6", "t1"],
	["7", "t2"],
	["8", "s0"],
	["9", "s1"],
	["10", "a0"],
	["11", "a1"],
	["12", "a2"],
	["13", "a3"],
	["14", "a4"],
	["15", "a5"],
	["16", "a6"],
	["17", "a7"],
	["18", "s2"],
	["19", "s3"],
	["20", "s4"],
	["21", "s5"],
	["22", "s6"],
	["23", "s7"],
	["24", "s8"],
	["25", "s9"],
	["26", "s10"],
	["27", "s11"],
	["28", "t3"],
	["29", "t4"],
	["30", "t5"],
	["31", "t6"],
]);

function timeout(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * This interface describes the debug-specific launch attributes (which are not
 * part of the Debug Adapter Protocol). The schema for these attributes lives in
 * the package.json of the extension. The interface should always match this
 * schema.
 */
interface LaunchRequestArguments extends DebugProtocol.LaunchRequestArguments {
	/** An absolute path to the "program" to debug. */
	program: string;
	/** Automatically stop target after launch. If not specified, target does not stop. */
	stopOnEntry?: boolean;
	/** enable logging the Debug Adapter Protocol */
	trace?: boolean;
	/** open views on start */
	openViews?: string[];
}

export class VenusDebugSession extends LoggingDebugSession {

	// we don't support multiple threads, so we can use a hardcoded ID for the default thread
	private static THREAD_ID = 1;
	// a Mock runtime (or debugger)
	private _runtime: VenusRuntime;
	private _variableHandles = new Handles<string>();
	private _riscvAssemblyProvider = new riscvDisassemblyProvider();
	private _providerDisposable: Disposable;
	private _windowDisposable: Disposable;
	private _assemblyViewEditor: TextEditor;
	private _assemblyDocument: TextDocument;
	private _openDisassemblyDisposable: Disposable;
	private _configurationDone = new Subject();

	private _cancelationTokens = new Map<number, boolean>();
	//private _isLongrunning = new Map<number, boolean>();

	private _reportProgress = false;
	private _progressId = 10000;
	private _cancelledProgressId: string | undefined = undefined;
	private _isProgressCancellable = true;

	/**
	 * Creates a new debug adapter that is used for one debug session.
	 * We configure the default implementation of a debug adapter here.
	 */
	public constructor() {
		super("mock-debug.txt");

		// this debugger uses 1-based lines and columns
		this.setDebuggerLinesStartAt1(true);
		this.setDebuggerColumnsStartAt1(false);
		this._runtime = new VenusRuntime();

		this._openDisassemblyDisposable = commands.registerCommand('riscv-venus.openAssembly', () =>
		this.openDisassemblyView());
		this._providerDisposable = workspace.registerTextDocumentContentProvider(riscvAsmScheme, this._riscvAssemblyProvider);
		workspace.onDidChangeConfiguration(e => {
			if (e != null) {
				this.sendEvent(new StoppedEvent('settings changed', VenusDebugSession.THREAD_ID))
			}
		})
		// setup event handlers
		this._runtime.on('stopOnEntry', () => {
			this.sendEvent(new StoppedEvent('entry', VenusDebugSession.THREAD_ID));
		});
		this._runtime.on('stopOnStep', () => {
			this.sendEvent(new StoppedEvent('step', VenusDebugSession.THREAD_ID));
		});
		this._runtime.on('stopOnBreakpoint', () => {
			this.sendEvent(new StoppedEvent('breakpoint', VenusDebugSession.THREAD_ID));
		});
		this._runtime.on('stopOnDataBreakpoint', () => {
			this.sendEvent(new StoppedEvent('data breakpoint', VenusDebugSession.THREAD_ID));
		});
		this._runtime.on('stopOnException', () => {
			this.sendEvent(new StoppedEvent('exception', VenusDebugSession.THREAD_ID));
		});
		this._runtime.on('breakpointValidated', (bp: VenusBreakpoint) => {
			this.sendEvent(new BreakpointEvent('changed', <DebugProtocol.Breakpoint>{ verified: bp.verified, id: bp.id }));
		});
		this._runtime.on('output', (text, filePath, line, column) => {
			const e: DebugProtocol.OutputEvent = new OutputEvent(`${text}\n`);

			if (text === 'start' || text === 'startCollapsed' || text === 'end') {
				e.body.group = text;
				e.body.output = `group-${text}\n`;
			}

			e.body.source = this.createSource(filePath);
			e.body.line = this.convertDebuggerLineToClient(line);
			e.body.column = this.convertDebuggerColumnToClient(column);
			this.sendEvent(e);
		});
		this._runtime.on('end', () => {
			this.sendEvent(new TerminatedEvent());
		});
	}

	/**
	 * The 'initialize' request is the first request called by the frontend
	 * to interrogate the features the debug adapter provides.
	 */
	protected initializeRequest(response: DebugProtocol.InitializeResponse, args: DebugProtocol.InitializeRequestArguments): void {

		if (args.supportsProgressReporting) {
			this._reportProgress = true;
		}

		// build and return the capabilities of this debug adapter:
		response.body = response.body || {};

		// the adapter implements the configurationDoneRequest.
		response.body.supportsConfigurationDoneRequest = true;

		// the adapter supports changing register values.
		response.body.supportsSetVariable = true;


		// make VS Code to use 'evaluate' when hovering over source
		response.body.supportsEvaluateForHovers = true;

		// make VS Code to show a 'step back' button
		response.body.supportsStepBack = false;

		// make VS Code to support data breakpoints
		response.body.supportsDataBreakpoints = true;

		// make VS Code to support completion in REPL
		response.body.supportsCompletionsRequest = true;
		response.body.completionTriggerCharacters = [ ".", "[" ];

		// make VS Code to send cancelRequests
		response.body.supportsCancelRequest = true;

		// make VS Code send the breakpointLocations request
		response.body.supportsBreakpointLocationsRequest = false;

		// TODO implement
		response.body.supportsRestartRequest = false;
		// Doesn't seem to be supported for now
		// response.body.supportsDisassembleRequest = true;

		this.sendResponse(response);

		// since this debug adapter can accept configuration requests like 'setBreakpoint' at any time,
		// we request them early by sending an 'initializeRequest' to the frontend.
		// The frontend will end the configuration sequence by calling 'configurationDone' request.
		this.sendEvent(new InitializedEvent());
	}

	/**
	 * Called at the end of the configuration sequence.
	 * Indicates that all breakpoints etc. have been sent to the DA and that the 'launch' can start.
	 */
	protected configurationDoneRequest(response: DebugProtocol.ConfigurationDoneResponse, args: DebugProtocol.ConfigurationDoneArguments): void {
		super.configurationDoneRequest(response, args);

		// notify the launchRequest that configuration has finished
		this._configurationDone.notify();
	}

	protected async launchRequest(response: DebugProtocol.LaunchResponse, args: LaunchRequestArguments) {

		// make sure to 'Stop' the buffered logging if 'trace' is not set
		logger.setup(args.trace ? Logger.LogLevel.Verbose : Logger.LogLevel.Stop, false);

		this._runtime.assemble(args.program, basename(args.program));

		VenusRuntime.registerECallReceiver(this.receiveEcall);
		this.resetViews();


		// Add Instruction Information to Line

		// wait until configuration has finished (and configurationDoneRequest has been called)
		await this._configurationDone.wait(100);

		let doOpen = workspace.getConfiguration('riscv-venus').get('autoOpenDisassembly');

		if (doOpen) {
			this.openDisassemblyView();
		}

		args.openViews?.forEach(view => {
			this.openView(view)
		});

		// start the program in the runtime
		this._runtime.start(args.stopOnEntry ? args.stopOnEntry : true);

		response.success = true
		this.sendResponse(response)


	}

	protected setBreakPointsRequest(response: DebugProtocol.SetBreakpointsResponse, args: DebugProtocol.SetBreakpointsArguments): void {

		const path = <string>args.source.path;
		const clientLines = args.lines || [];

		// clear all breakpoints for this file
		this._runtime.clearBreakpoints(path);

		// set and verify breakpoint locations
		const actualBreakpoints = clientLines.map(l => {
			let { verified, line, id } = this._runtime.setBreakPoint(path, this.convertClientLineToDebugger(l));
			const bp = <DebugProtocol.Breakpoint> new Breakpoint(verified, this.convertDebuggerLineToClient(line));
			bp.id= id;
			return bp;
		});

		// send back the actual breakpoint positions
		response.body = {
			breakpoints: actualBreakpoints
		};
		this.sendResponse(response);
	}

	protected breakpointLocationsRequest(response: DebugProtocol.BreakpointLocationsResponse, args: DebugProtocol.BreakpointLocationsArguments, request?: DebugProtocol.Request): void {

		if (args.source.path) {
			const bps = this._runtime.getBreakpoints(args.source.path, this.convertClientLineToDebugger(args.line));
			response.body = {
				breakpoints: bps.map(col => {
					return {
						line: args.line,
						column: this.convertDebuggerColumnToClient(col)
					}
				})
			};
		} else {
			response.body = {
				breakpoints: []
			};
		}
		this.sendResponse(response);
	}

	protected threadsRequest(response: DebugProtocol.ThreadsResponse): void {

		// runtime supports no threads so just return a default thread.
		response.body = {
			threads: [
				new Thread(VenusDebugSession.THREAD_ID, "thread 1")
			]
		};
		this.sendResponse(response);
	}

	protected stackTraceRequest(response: DebugProtocol.StackTraceResponse, args: DebugProtocol.StackTraceArguments): void {

		const startFrame = typeof args.startFrame === 'number' ? args.startFrame : 0;
		const maxLevels = typeof args.levels === 'number' ? args.levels : 1000;
		const endFrame = startFrame + maxLevels;

		const stk = this._runtime.stack(startFrame, endFrame);

		response.body = {
			stackFrames: stk.frames.map(f => new StackFrame(f.index, f.name, this.createSource(f.file), this.convertDebuggerLineToClient(f.line))),
			totalFrames: stk.count
		};
		this.sendResponse(response);
	}

	protected scopesRequest(response: DebugProtocol.ScopesResponse, args: DebugProtocol.ScopesArguments): void {

		response.body = {
			scopes: [
				new Scope("PC", this._variableHandles.create("pc"), false),
				new Scope("Integer", this._variableHandles.create("integer"), false),
				new Scope("Float", this._variableHandles.create("float"), false)
			]
		};
		this.sendResponse(response);
	}

	protected async variablesRequest(response: DebugProtocol.VariablesResponse, args: DebugProtocol.VariablesArguments, request?: DebugProtocol.Request) {

		const variables: DebugProtocol.Variable[] = [];
		let format = workspace.getConfiguration('riscv-venus').get('variableFormat');
		let formatFunction: (para: number) => string;
		let floatFormatFunction: (decimal: any) => string;
		switch (format) {
			case "hex": {
				formatFunction = (para: number) => {
					return "0x" + ((para >>> 0).toString(16).toUpperCase().padStart(8, '0'));
				}
				floatFormatFunction = (decimal: any) => {
					return decimal.toHex();
				}
				break;
			}
			case "binary": {
				formatFunction = (para: number) => {
					return ((para >>> 0).toString(2).padStart(32, '0'));
				}
				floatFormatFunction = (decimal: any) => {
					return decimal.toHex();
				}
				break;
			}
			case "decimal": {
				formatFunction = (para: number) => {
					return para.toString(10)
				}
				floatFormatFunction = (decimal: any) => {
					return decimal.toDecimal();
				}
				break;
			}
			case "ascii": {
				formatFunction = (para: number) => {
					let binary = (para >>> 0).toString(2).padStart(32, '0')
					// Split string into
					let asciiBin = binary.match(/.{8}/g);
					if (asciiBin != null) {
						return String.fromCharCode(parseInt(asciiBin[0], 2)) + String.fromCharCode(parseInt(asciiBin[1], 2)) +
							String.fromCharCode(parseInt(asciiBin[2], 2)) + String.fromCharCode(parseInt(asciiBin[3], 2))
					}
					return ''
				}
				floatFormatFunction = (decimal: any) => {
					return decimal.toAscii();
				}
				break;
			}
			default: {
				formatFunction = (para: number) => {
					return "0x" + (para >>> 0).toString(16);
				}
				floatFormatFunction = (decimal: any) => {
					return decimal.toHex();
				}
				break;
			}
		}

		const id = this._variableHandles.get(args.variablesReference);

		if (id == "integer") {
			const registers = this._runtime.getRegisters()
			registers.forEach(reg => {
				variables.push({
					name: "x" + reg.id.toString().padStart(2,'0') + (" (" + regNames.get(reg.id.toString()) + ")").padEnd(7, " "),
					type: "hex",
					value: formatFunction(reg.value),
					variablesReference: 0,
					indexedVariables: 0,
					namedVariables: 0,
				})
			})
		} else if (id == "float") {

			const f_registers = this._runtime.getFRegisters()
			var value;
			f_registers.forEach(reg => {
				if (reg.value.isFloat) {
					value = reg.value.float
				} else {
					value = reg.value.double
				}
				variables.push({
					name: "f" + reg.id.toString().padStart(2,'0'),
					type: "hex",
					value: floatFormatFunction(reg.value),
					variablesReference: 0,
					indexedVariables: 0,
					namedVariables: 0,
				})
			})
		} else if (id == "pc") {
			variables.push({
				name: "PC",
				type: "hex",
				value: formatFunction(this._runtime.getPC()),
				variablesReference: 0,
				indexedVariables: 0,
				namedVariables: 0,
			 })
		}

		response.body = {
			variables: variables
		};
		this.sendResponse(response);
	}

	protected setVariableRequest(response: DebugProtocol.SetVariableResponse, args: DebugProtocol.SetVariableArguments, request?: DebugProtocol.Request): void {
		if (args.name.startsWith("x")) {
			if (Number.isInteger(parseInt(args.value))) {
				this._runtime.setRegister(parseInt(args.name.replace(new RegExp("\s(.*)", "i"), "").replace("x", "")), parseInt(args.value));
			} else {
				response.success = false;
				response.message = "The specified value for register could not be interpreted as an integer"
			}
		} else if (args.name.startsWith("f")) {
			if (!isNaN(parseFloat(args.value))) {
				this._runtime.setFRegister(parseInt(args.name.replace("f", "")), parseFloat(args.value));
			} else {
				response.success = false;
				response.message = "The specified value for register could not be interpreted as an float"
			}
		}
		this.sendResponse(response);
		if (response.success) {
			this.sendEvent(new StoppedEvent('setVariable', VenusDebugSession.THREAD_ID))
		}
	}

	protected continueRequest(response: DebugProtocol.ContinueResponse, args: DebugProtocol.ContinueArguments): void {
		this._runtime.continue();
		this.updateAssemblyViewDecorator();
		this.sendResponse(response);
	}

	/*
		Not yet supported
		see: https://gitlab.lrz.de/riscv/debugger/-/issues/9
	*/
	protected reverseContinueRequest(response: DebugProtocol.ReverseContinueResponse, args: DebugProtocol.ReverseContinueArguments) : void {
		console.warn("ReverseContinue is not supported yet (=> Continue)")
		this._runtime.continue();
		this.sendResponse(response);
 	}

	protected nextRequest(response: DebugProtocol.NextResponse, args: DebugProtocol.NextArguments): void {
		this._runtime.step();
		this.updateAssemblyViewDecorator();
		this.sendResponse(response);
	}

	protected stepBackRequest(response: DebugProtocol.StepBackResponse, args: DebugProtocol.StepBackArguments): void {
		this._runtime.step(true);
		this.sendResponse(response);
	}

	protected evaluateRequest(response: DebugProtocol.EvaluateResponse, args: DebugProtocol.EvaluateArguments): void {

		let reply: string | undefined = undefined;

		if (args.context === 'repl') {
			// 'evaluate' supports to create and delete breakpoints from the 'repl':
			const matches = /new +([0-9]+)/.exec(args.expression);
			if (matches && matches.length === 2) {
				const mbp = this._runtime.setBreakPoint(this._runtime.sourceFile, this.convertClientLineToDebugger(parseInt(matches[1])));
				const bp = <DebugProtocol.Breakpoint> new Breakpoint(mbp.verified, this.convertDebuggerLineToClient(mbp.line), undefined, this.createSource(this._runtime.sourceFile));
				bp.id= mbp.id;
				this.sendEvent(new BreakpointEvent('new', bp));
				reply = `breakpoint created`;
			} else {
				const matches = /del +([0-9]+)/.exec(args.expression);
				if (matches && matches.length === 2) {
					const mbp = this._runtime.clearBreakPoint(this._runtime.sourceFile, this.convertClientLineToDebugger(parseInt(matches[1])));
					if (mbp) {
						const bp = <DebugProtocol.Breakpoint> new Breakpoint(false);
						bp.id= mbp.id;
						this.sendEvent(new BreakpointEvent('removed', bp));
						reply = `breakpoint deleted`;
					}
				} else {
					const matches = /progress/.exec(args.expression);
					if (matches && matches.length === 1) {
						if (this._reportProgress) {
							reply = `progress started`;
							this.progressSequence();
						} else {
							reply = `frontend doesn't support progress (capability 'supportsProgressReporting' not set)`;
						}
					}
				}
			}
		}

		response.body = {
			result: reply ? reply : `evaluate(context: '${args.context}', '${args.expression}')`,
			variablesReference: 0
		};
		this.sendResponse(response);
	}

	private async progressSequence() {

		const ID = '' + this._progressId++;

		await timeout(100);

		const title = this._isProgressCancellable ? 'Cancellable operation' : 'Long running operation';
		const startEvent: DebugProtocol.ProgressStartEvent = new ProgressStartEvent(ID, title);
		startEvent.body.cancellable = this._isProgressCancellable;
		this._isProgressCancellable = !this._isProgressCancellable;
		this.sendEvent(startEvent);
		this.sendEvent(new OutputEvent(`start progress: ${ID}\n`));

		let endMessage = 'progress ended';

		for (let i = 0; i < 100; i++) {
			await timeout(500);
			this.sendEvent(new ProgressUpdateEvent(ID, `progress: ${i}`));
			if (this._cancelledProgressId === ID) {
				endMessage = 'progress cancelled';
				this._cancelledProgressId = undefined;
				this.sendEvent(new OutputEvent(`cancel progress: ${ID}\n`));
				break;
			}
		}
		this.sendEvent(new ProgressEndEvent(ID, endMessage));
		this.sendEvent(new OutputEvent(`end progress: ${ID}\n`));

		this._cancelledProgressId = undefined;
	}

	protected dataBreakpointInfoRequest(response: DebugProtocol.DataBreakpointInfoResponse, args: DebugProtocol.DataBreakpointInfoArguments): void {

		response.body = {
            dataId: null,
            description: "cannot break on data access",
            accessTypes: undefined,
            canPersist: false
        };

		if (args.variablesReference && args.name) {
			const id = this._variableHandles.get(args.variablesReference);
			if (id.startsWith("global_")) {
				response.body.dataId = args.name;
				response.body.description = args.name;
				response.body.accessTypes = [ "read" ];
				response.body.canPersist = true;
			}
		}

		this.sendResponse(response);
	}

	protected setDataBreakpointsRequest(response: DebugProtocol.SetDataBreakpointsResponse, args: DebugProtocol.SetDataBreakpointsArguments): void {

		// clear all data breakpoints
		this._runtime.clearAllDataBreakpoints();

		response.body = {
			breakpoints: []
		};

		for (let dbp of args.breakpoints) {
			// assume that id is the "address" to break on
			const ok = this._runtime.setDataBreakpoint(dbp.dataId);
			response.body.breakpoints.push({
				verified: ok
			});
		}

		this.sendResponse(response);
	}

	protected completionsRequest(response: DebugProtocol.CompletionsResponse, args: DebugProtocol.CompletionsArguments): void {

		response.body = {
			targets: [
				{
					label: "item 10",
					sortText: "10"
				},
				{
					label: "item 1",
					sortText: "01"
				},
				{
					label: "item 2",
					sortText: "02"
				},
				{
					label: "array[]",
					selectionStart: 6,
					sortText: "03"
				},
				{
					label: "func(arg)",
					selectionStart: 5,
					selectionLength: 3,
					sortText: "04"
				}
			]
		};
		this.sendResponse(response);
	}

	protected cancelRequest(response: DebugProtocol.CancelResponse, args: DebugProtocol.CancelArguments) {
		if (args.requestId) {
			this._cancelationTokens.set(args.requestId, true);
		}
		if (args.progressId) {
			this._cancelledProgressId= args.progressId;
		}
	}
	protected disconnectRequest(response: DebugProtocol.DisconnectResponse, args: DebugProtocol.DisconnectArguments) {
		if (this._assemblyViewEditor != null) {
			if (this._assemblyDocument != null) {
				window.showTextDocument(this._assemblyDocument, {preview: false, viewColumn: this._assemblyViewEditor.viewColumn})
				.then(() => {
					return commands.executeCommand('workbench.action.closeActiveEditor');
				});
			}
		}
		this._openDisassemblyDisposable?.dispose();
		this._providerDisposable?.dispose();
		this._windowDisposable?.dispose();
		this.sendResponse(response)
	}

	//---- helpers

	private createSource(filePath: string): Source {
		return new Source(basename(filePath), this.convertDebuggerPathToClient(filePath), undefined, undefined, 'venus-adapter-data');
	}

	private async openDisassemblyView() {

		if (this._windowDisposable != null) {
			this._windowDisposable.dispose();
		}

		// Create Uri, set the text of our content provider and open the document.
		// Opening the document doesn't show a window. Think of it like opening a file on the filesystem.
		let assemblyUri = riscvDisassemblyProvider.createUri("assembly")
		this._riscvAssemblyProvider.setText(riscvDisassemblyProvider.decoratorLineInfoToString(this._runtime.getPcToAssemblyLine()), assemblyUri);
		this._assemblyDocument = await workspace.openTextDocument(assemblyUri); // calls back into the provider
		languages.setTextDocumentLanguage(this._assemblyDocument, "riscv")

		// If there is an assembly already open we try to get is viewcolumn and show the document in the same column.
		// If there is already an editor open that one is shown. Otherwise a new one is created Beside
		let viewColumn: ViewColumn | undefined;
		viewColumn = this._assemblyViewEditor?.viewColumn
		this._assemblyViewEditor = await window.showTextDocument(this._assemblyDocument, { preview: false , viewColumn: viewColumn ? viewColumn : ViewColumn.Beside});

		/** If we have have the assembly editor in the background all it's decorators are destroyed.
		 * So we create the decorators again if the assembly editor is brought to the foreground.
		*/
		this.updateAssemblyViewDecorator();
		this._windowDisposable =  window.onDidChangeActiveTextEditor((e) => {
			if (e != null && e.document != null) {
				if(e.document == this._assemblyViewEditor.document) {
					this._assemblyViewEditor = e;
					DisassemblyDecoratorProvider.updateDecorators(this._assemblyViewEditor, this._runtime.getCurrentAssemlyLineNo());
				}
			}
		});
	}

	private async resetViews() {
		VenusLedMatrixUI.getInstance().resetLedMatrix();
		MemoryUI.getInstance().resetMemory();
		VenusRobotUI.getInstance().resetLedMatrix();
	}

	private async openView(view: string) {

		if (this._windowDisposable != null) {
			this._windowDisposable.dispose();
		}

		// If there is an assembly open we try to get is viewcolumn and show the document in the same column.
		let viewColumn: ViewColumn | undefined;
		viewColumn = this._assemblyViewEditor?.viewColumn

		if (view == "LED Matrix")
			VenusLedMatrixUI.getInstance().show(viewColumn);
		else if (view == "Robot")
			VenusRobotUI.getInstance().show(viewColumn);

	}

	/** Updates the Decorators in Assemblyview. This means lines are marked, for example the current active line that is debugged. */
	private updateAssemblyViewDecorator() {
		if (this._assemblyViewEditor != null) {
			DisassemblyDecoratorProvider.updateDecorators(this._assemblyViewEditor, this._runtime.getCurrentAssemlyLineNo())
		}
	}

	private receiveEcall(json: string) {
		let jString = json;
		let jsonObj = JSON.parse(jString)
		if (jsonObj.id == 50) {
			let x = (jsonObj.params.a1 >> 16) & 0xFFFF
			let y = jsonObj.params.a1 & 0xFFFF
			let red = (jsonObj.params.a2 >> 16) & 0xFF
			let green = (jsonObj.params.a2 >> 8) & 0xFF
			let blue = jsonObj.params.a2 & 0xFF
			VenusLedMatrixUI.getInstance().setLed(x, y, new Color(red, green, blue))
		} else if (jsonObj.id == 0x110) {
			VenusRobotUI.getInstance().setLedRow(jsonObj.params)
		}
	}
}
