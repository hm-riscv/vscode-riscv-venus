/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import {
	Logger, logger,
	LoggingDebugSession,
	InitializedEvent, TerminatedEvent, StoppedEvent, BreakpointEvent, OutputEvent,
	ProgressStartEvent, ProgressUpdateEvent, ProgressEndEvent,
	Thread, StackFrame, Scope, Source, Handles, Breakpoint, Variable, ContinuedEvent
} from 'vscode-debugadapter';
import { DebugProtocol } from 'vscode-debugprotocol';
import { basename } from 'path';
import { VenusBreakpoint, VenusRuntime } from './venusRuntime';
import { workspace, languages, Disposable, window, ViewColumn, TextEditor, commands, Uri, TextDocument } from 'vscode';
import { AssemblyView, riscvDisassemblyProvider } from './assemblyView';
import { DisassemblyDecoratorProvider } from './assemblyDecorator';
import { VenusRenderer } from './venusRenderer';
import { VenusLedMatrixUI, Color, LedMatrix, UIState } from './ledmatrix/venusLedMatrixUI';
import { VenusRobotUI } from './robot/venusRobotUI';
import { VenusSevenSegBoardUI } from './sevensegboard/venusSevenSegBoardUI';
import { MemoryUI } from './memoryui/memoryUI';
import { venusTerminal } from './terminal/venusTerminal';
import { JsonObjectExpression } from 'typescript';
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
	/** If we should stop at Breakpoints. If set false the program executes without debugging. */
	stopAtBreakpoints?: boolean;
	/** enable logging the Debug Adapter Protocol */
	trace?: boolean;
	/** open views on start */
	openViews?: string[];
	/** The ledMatrix Size as an Json Object in the format {"x": 10, "y": 10} */
	ledMatrixSize?;
}

export class VenusDebugSession extends LoggingDebugSession {

	// we don't support multiple threads, so we can use a hardcoded ID for the default thread
	private static THREAD_ID = 1;
	// a Mock runtime (or debugger)
	private _runtime: VenusRuntime;
	private _variableHandles = new Handles<string>();
	//private _riscvAssemblyProvider = new riscvDisassemblyProvider();
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

		workspace.onDidChangeConfiguration(e => {
			if (e != null) {
				this.sendEvent(new StoppedEvent('settings changed', VenusDebugSession.THREAD_ID))
			}
		})
		// setup event handlers
		this._runtime.on('stopOnEntry', () => {
			this.updateAssemblyViewDecorator();
			this.sendEvent(new StoppedEvent('entry', VenusDebugSession.THREAD_ID));
		});
		this._runtime.on('stopOnStep', () => {
			this.updateAssemblyViewDecorator();
			this.sendEvent(new StoppedEvent('step', VenusDebugSession.THREAD_ID));
		});
		this._runtime.on('stopOnBreakpoint', () => {
			this.updateAssemblyViewDecorator();
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
		this._runtime.on('continue', () => {
			this.sendEvent(new ContinuedEvent(VenusDebugSession.THREAD_ID, true))
		})
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

		venusTerminal.appendLine(`-------------------------------------------------------------------------------------------`)
		venusTerminal.appendLine(`Starting program ${args.program}`)
		venusTerminal.appendLine(` `)

		// make sure to 'Stop' the buffered logging if 'trace' is not set
		logger.setup(args.trace ? Logger.LogLevel.Verbose : Logger.LogLevel.Stop, false);

		// Sometimes the Venus Options Menu is not shown.(Vscode Bug?) This makes sure it is shown at least when we start debug
		commands.executeCommand('setContext', 'venus:showOptionsMenu', true);

		this._runtime.assemble(args.program, basename(args.program));
		if (args.stopAtBreakpoints != null) {
			this._runtime.setStopAtBreakpoint(args.stopAtBreakpoints);
		}

		if (args.ledMatrixSize != null) {
			VenusLedMatrixUI.createNewInstance(undefined, new UIState(new LedMatrix(args.ledMatrixSize.x, args.ledMatrixSize.y)))
		}

		VenusRuntime.registerECallReceiver(this.receiveEcall);
		this.resetViews();

		// Add Instruction Information to Line

		// wait until configuration has finished (and configurationDoneRequest has been called)
		await this._configurationDone.wait(100);

		let doOpen = workspace.getConfiguration('riscv-venus').get('autoOpenDisassembly');

		if (doOpen) {
			this.openDisassemblyView();
		} else {
			AssemblyView.getInstance().updateDisassemblyView(this._runtime, false)
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
		let formatFunction: (para: number) => string = this.getFormatFunction();
		let floatFormatFunction: (decimal: any) => string = this.getFloatFormatFunction();

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
		this._runtime.run();
		this.sendResponse(response);
	}

	protected pauseRequest(response: DebugProtocol.PauseResponse, args: DebugProtocol.PauseArguments) {
		this._runtime.run();
		this.sendResponse(response);
	}

	protected stepInRequest(response: DebugProtocol.StepInResponse, args: DebugProtocol.StepInArguments) {
		this._runtime.step();
		this.sendResponse(response);
	}

	protected stepOutRequest(response: DebugProtocol.StepOutResponse, args: DebugProtocol.StepOutArguments) {
		this._runtime.stepOut();
		this.sendResponse(response);
	}

	/*
		Not yet supported
		see: https://gitlab.lrz.de/riscv/debugger/-/issues/9
	*/
	protected reverseContinueRequest(response: DebugProtocol.ReverseContinueResponse, args: DebugProtocol.ReverseContinueArguments) : void {
		console.warn("ReverseContinue is not supported yet (=> Continue)")
		this._runtime.run();
		this.sendResponse(response);
 	}

	protected nextRequest(response: DebugProtocol.NextResponse, args: DebugProtocol.NextArguments): void {
		this._runtime.stepOver();
		this.sendResponse(response);
	}

	protected stepBackRequest(response: DebugProtocol.StepBackResponse, args: DebugProtocol.StepBackArguments): void {
		this._runtime.step(true);
		this.sendResponse(response);
	}

	protected evaluateRequest(response: DebugProtocol.EvaluateResponse, args: DebugProtocol.EvaluateArguments): void {

		let reply: string | null = null;
		let regId: number | null = null;

		if (args.context == 'hover') {
			if (args.expression.startsWith('f')) { // float registers
				if (!isNaN(parseInt(args.expression.replace("f", "")))) {
					let formatFunction = this.getFloatFormatFunction()
					reply = formatFunction(this._runtime.getFRegister(parseInt(args.expression.replace("f", ""))).value);
				}
			} else if (args.expression.startsWith('x')) { // starting with x
				if (!isNaN(parseInt(args.expression.replace("x", "")))) {
					let formatFunction = this.getFormatFunction()
					reply = formatFunction(this._runtime.getRegister(parseInt(args.expression.replace("x", ""))).value);
				}
			} else if (!args.expression.match(new RegExp('^\d'))) { // Alternative register labels
				for (let [key, value] of regNames.entries()) {
					if (value === args.expression) {
						regId = parseInt(key)
						break
					}
				}
				if (regId != null) {
					let formatFunction = this.getFormatFunction()
					reply = formatFunction(this._runtime.getRegister(regId).value)
				}
			}
		}

		response.body = {
			result: reply ? reply : `${args.expression}`,
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
		AssemblyView.getInstance().close();
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
		AssemblyView.getInstance().updateDisassemblyView(this._runtime, true)
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

		let viewColumn: ViewColumn | undefined;
		viewColumn = this._assemblyViewEditor?.viewColumn

		if (view == "LED Matrix")
			VenusLedMatrixUI.getInstance().show(viewColumn);
		else if (view == "Robot")
			VenusRobotUI.getInstance().show(viewColumn);
		else if (view == "Seven Segment Board")
			VenusSevenSegBoardUI.getInstance().show(viewColumn);

	}

	/** Updates the Decorators in Assemblyview. This means lines are marked, for example the current active line that is debugged. */
	private updateAssemblyViewDecorator() {
		AssemblyView.getInstance().updateDecorators()
	}

	private getFormatFunction(): (para: number) => string{
		let format = workspace.getConfiguration('riscv-venus').get('variableFormat');
		let formatFunction: (para: number) => string;
		switch (format) {
			case "hex": {
				formatFunction = (para: number) => {
					return "0x" + ((para >>> 0).toString(16).toUpperCase().padStart(8, '0'));
				}
				break;
			}
			case "binary": {
				formatFunction = (para: number) => {
					return ((para >>> 0).toString(2).padStart(32, '0'));
				}
				break;
			}
			case "decimal": {
				formatFunction = (para: number) => {
					return para.toString(10)
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
				break;
			}
			default: {
				formatFunction = (para: number) => {
					return "0x" + (para >>> 0).toString(16);
				}
				break;
			}
		}

		return formatFunction
	}

	private getFloatFormatFunction(): (decimal: any) => string{
		let format = workspace.getConfiguration('riscv-venus').get('variableFormat');
		let floatFormatFunction: (decimal: any) => string;
		switch (format) {
			case "hex": {
				floatFormatFunction = (decimal: any) => {
					return decimal.toHex();
				}
				break;
			}
			case "binary": {
				floatFormatFunction = (decimal: any) => {
					return decimal.toHex();
				}
				break;
			}
			case "decimal": {
				floatFormatFunction = (decimal: any) => {
					return decimal.toDecimal();
				}
				break;
			}
			case "ascii": {
				floatFormatFunction = (decimal: any) => {
					return decimal.toAscii();
				}
				break;
			}
			default: {
				floatFormatFunction = (decimal: any) => {
					return decimal.toHex();
				}
				break;
			}
		}
		return floatFormatFunction
	}

	private receiveEcall(json: string) : string {
		let jString = json;
		let jsonObj = JSON.parse(jString)
		let result = {}
		if (jsonObj.id == 0x100) {
			result = VenusLedMatrixUI.getInstance().ecall(jsonObj.id, jsonObj.params)
		} else if (jsonObj.id == 0x110) {
			result = VenusRobotUI.getInstance().ecall(jsonObj.id, jsonObj.params)
		} else if ((jsonObj.id >= 0x120) && (jsonObj.id < 0x123)) {
			result = VenusSevenSegBoardUI.getInstance().ecall(jsonObj.id, jsonObj.params);
		} else if (jsonObj.id == 0x130) {
			venusTerminal.activateInput()
			venusTerminal.show()
		} else if (jsonObj.id == 0x131) {
			let char = venusTerminal.consumeInputBuffer()
			if (char == null) {
				if (venusTerminal.waitingForInput()) {
					result = {"a1": 0x00000001}
				} else {
					result = {"a1": 0x00000000}
				}
			} else {
				let charCode = char.charCodeAt(0) & 0x0FFFFFFF
				result = {"a1": 0x00000002,
						"a2": charCode | 0x00000000,}
			}
		}

		return JSON.stringify(result)
	}
}
