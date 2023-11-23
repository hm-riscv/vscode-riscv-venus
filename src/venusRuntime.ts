/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import { readFileSync } from 'fs';
import { EventEmitter } from 'events';
import simulator = require('./runtime/riscvSimulator');
import range from 'lodash/range';
import { VenusRenderer } from './venusRenderer';
import { MemoryUI } from './memoryui/memoryUI';
import { clearTimeout } from 'timers';
import * as helpers from './venusHelpers';

import SortedSet from 'js-sorted-set';

export interface VenusBreakpoint {
	id: number;
	line: number;
	verified: boolean;
	path: string;
}

export interface Register {
	id: number;
	value: number;
}

export class VenusSettings {
	alignedAddress: boolean | undefined;
    mutableText: boolean | undefined;
    ecallOnlyExit: boolean | undefined;
    setRegesOnInit: boolean | undefined;
    maxSteps: number | undefined;
    allowAccessBtnStackHeap: boolean | undefined;
	onlyShowUsedRegs: boolean | undefined;
}
/**
 * This interface holds the data that a AssemblyLine contains
 */
export interface AssemblyLine {
	pc: number;
    mCode: number;
	basicCode: string;
	assemblyViewLine: number;
	sourcePath: string;
	sourceLine: number;
}

export interface CallStackItem {
	index: number;
	name: string;
	file: string;
	line: number;
}

enum EscapeCondidtion {
	continue,
	stepOver,
	stepOut,
}

/**
 * This Runtime communicates between vscode and the venus Simulator
 */
export class VenusRuntime extends EventEmitter {

	// the initial file we are 'debugging'
	private _sourceFile: string;
	public get sourceFile() {
		return this._sourceFile;
	}

	// This stack keeps track of the functions we jumped from
	private _functionStack = new Array<CallStackItem>();

	// maps from sourceFile to array of Mock breakpoints
	private _breakPoints = new Map<string, VenusBreakpoint[]>();

	// since we want to send breakpoint events, we will assign an id to every event
	// so that the frontend can match events with breakpoints.
	private _breakpointId = 1;

	private _onlyShowUsedRegs = false;

	private _usedRegisters = new SortedSet();

	private _maximumLineNumber = new Map<string, number>();

	constructor() {
		super();
		VenusRenderer.getInstance().setRuntime(this);
	}

	private _stopAtBreakpoint = true;

	private sourceLineToPc: Map<string, number[]> = new Map<string, number[]>();
	private pcToAssemblyLine: Map<number, AssemblyLine> = new Map<number, AssemblyLine>();

	/**
	 * Start executing the given program.
	 */
	public start(stopOnEntry: boolean) {
		if (stopOnEntry) {
			this.updateStack();
			this.sendEvent('stopOnEntry');
		} else {
			// we just start to run until we hit a breakpoint or an exception
			this.run();
		}
	}

	public assemble(fpath: string, fName: string, settings: VenusSettings) {
		try {
			this.applySettings(settings);
			let text: string = readFileSync(fpath).toString();
			let posixPath = helpers.toPosixPath(fpath);
			var[success, error, warnings] = simulator.driver.externalAssemble(text, posixPath, fName);
			if (!success) {
				VenusRenderer.getInstance().showErrorWithPopup(error);
				this.sendEvent("end");
				return;
			}
			for (let warn of warnings.toArray()) {
				VenusRenderer.getInstance().printWarning(warn.toString());
			}

			this.getAssemblyLines();
		} catch (e: unknown) {
			VenusRenderer.getInstance().showErrorWithPopup(e);
			this.sendEvent('end');
		}
	}

	private applySettings(settings: VenusSettings) {
		if (settings.alignedAddress !== undefined) {
			simulator.driver.simSettings.alignedAddress = settings.alignedAddress;
		}
		if (settings.mutableText !== undefined) {
			simulator.driver.simSettings.mutableText = settings.mutableText;
		}
		if (settings.ecallOnlyExit !== undefined) {
			simulator.driver.simSettings.ecallOnlyExit = settings.ecallOnlyExit;
		}
		if (settings.setRegesOnInit !== undefined) {
			simulator.driver.simSettings.setRegesOnInit = settings.setRegesOnInit;
		}
		if (settings.maxSteps !== undefined) {
			simulator.driver.simSettings.maxSteps = settings.maxSteps;
		}
		if (settings.allowAccessBtnStackHeap !== undefined) {
			simulator.driver.simSettings.allowAccessBtnStackHeap = settings.allowAccessBtnStackHeap;
		}

		if (settings.onlyShowUsedRegs !== undefined) {
			this._onlyShowUsedRegs = settings.onlyShowUsedRegs;
		}
	}



	private getAssemblyLines(){
		this.pcToAssemblyLine.clear();
		this.sourceLineToPc.clear();
		let instructions = simulator.driver.getInstructions();

		for (let i = 0; i < instructions.length; i++) {
			const currentMaximumLine = this._maximumLineNumber.get(instructions[i].sourceFile);
			if(!currentMaximumLine || currentMaximumLine < instructions[i].line) {
				this._maximumLineNumber.set(instructions[i].sourceFile ,instructions[i].line);
			}
			let assemblyLine: AssemblyLine = {pc: instructions[i].pc, mCode: instructions[i].mcode, basicCode: instructions[i].basicCode, assemblyViewLine: 0, sourceLine: instructions[i].line, sourcePath: instructions[i].sourceFile};
			this.pcToAssemblyLine.set(instructions[i].pc, assemblyLine);
			let sourceIdent = this.createSourcelineString(instructions[i].sourceFile, instructions[i].line);
			if (this.sourceLineToPc.has(sourceIdent)) {
				this.sourceLineToPc.get(sourceIdent)!.push(instructions[i].pc);
			} else {
				this.sourceLineToPc.set(sourceIdent, [instructions[i].pc]);
			}
		}
	}


	/** Creates a sourceLine identifier for debugging: C://exampledir/example.file:5 5 == linenumber */
	private createSourcelineString(path: string, line: number): string {
		const firstChar = path.charAt(0);
		path = (firstChar.toLowerCase() === firstChar.toUpperCase()) ? path : firstChar.toUpperCase() + path.slice(1);
		return path + ':' + Math.round(line).toString();
	}

	public getPcToAssemblyLine(): Map<number, AssemblyLine> {
		return this.pcToAssemblyLine;
	}

	public getCurrentAssemlyLineNo(): number {
		if (this.pcToAssemblyLine.has(simulator.driver.sim.getPC())) {
			return this.pcToAssemblyLine.get(simulator.driver.sim.getPC())!.assemblyViewLine;
		} else {
			return 0;
		}
	}

	public getPC(): number {
		return simulator.driver.sim.getPC();
	}

	public getPRIV(): number {
		return simulator.driver.sim.getPRIV();
	}

	public useRegister(id: number) {
		if (!this._usedRegisters.contains(id)) {
			this._usedRegisters.insert(id);
		}
	}

	/**
	 * Returns the common registers
	 * No float registeres included
	 */
	public getRegisters(): Register[] {
		if (this._onlyShowUsedRegs) {
			return this._usedRegisters.map(id => {
				return {
					id,
					value: simulator.driver.getRegister(id)
				};
			});				
		} else {
			return range(0,32).map(id => {
				return {
					id,
					value: simulator.driver.getRegister(id)
				};
			});	
		}
	}


	public getRegister(id: number): Register {
		return {
			id,
			value: simulator.driver.getRegister(id)
		};
	}

	/**
	 * Returns the float registers
	 */
	public getFRegisters() {
		return range(0,32).map(id => {
			return {
				id,
				value: simulator.driver.getFRegister(id)
			};
		});
	}

	public getFRegister(id: number): Register {
		return {
			id,
			value: simulator.driver.getFRegister(id)
		};
	}

	/**
	 * Returns all the CSR registers
	 */
	public getCsrRegisters() {
		var csrRegs = simulator.driver.getCsrRegisterNames();
		return csrRegs.map(name => {
			return {
				name: name,
				value: simulator.driver.getCsrRegisterByName(name)
			};
		});
	}

	/**
	 * Get a CSR Register from the simulator.
	 * 
	 * @param id The CSR register id (addr)
	 */
	// public getCsrRegister(id: number): Register {
	// 	return {
	// 		id,
	// 		value: simulator.driver.getCsrRegister(id)
	// 	};
	// }

	/**
	 * Get a CSR Register value by Name.
	 * 
	 * @param name The CSR register name
	 */
	 public getCsrRegisterByName(name: string): number {
		return simulator.driver.getCsrRegisterByName(name);
	}
	
	/**
	 * Get a CSR Register id (addr) by Name.
	 * 
	 * @param id The CSR register id (name)
	 */
	public getCsrRegisterIdByName(name: string): number {
		return simulator.driver.getCsrRegisterIdByName(name);
	}
	
	
	/**
	 * Get a CSR Register names.
	 * 
	 * @param id The CSR register id (name)
	 */
	//  public getCsrRegisterNames(): Array<String> {
	// 	return simulator.driver.getCsrRegisterNames();
	// }

	/**
	 * Sets an int Register in the simulator.
	 * Automatically transforms value into an 32bit signed integer
	 * If value is bigger then INT_MAXVALUE the value is wrapping around according to two-complement format.
	 * @param reg The register with value
	 */
	public setRegister(id: number, value: number) {
		if (Number.isInteger(id) && Number.isInteger(value)) {
			let pureInt = value;
			let twoComplementInt = ~~pureInt; // ~~ "Trick" taken from https://stackoverflow.com/a/37022667
			simulator.driver.setRegister(id, twoComplementInt);
		}
	}

	/**
	 * Sets a float Register in the simulator.
	 * Make sure the register value is float.
	 * @param reg The register with value
	 */
	public setFRegister(id: number, value: number) {
		if (Number.isInteger(id) && !Number.isInteger(value)) {
			simulator.driver.setFRegister(id, value);
		}
	}

	/**
	 * Sets an CSR Register in the simulator.
	 * Automatically transforms value into an 32bit signed integer
	 * If value is bigger then INT_MAXVALUE the value is wrapping around according to two-complement format.
	 * @param reg The register with value
	 */
	//  public setCsrRegister(id: number, value: number) {
	// 	if (Number.isInteger(id) && Number.isInteger(value)) {
	// 		let pureInt = value;
	// 		let twoComplementInt = ~~pureInt; // ~~ "Trick" taken from https://stackoverflow.com/a/37022667
	// 		simulator.driver.setCsrRegister(id, twoComplementInt);
	// 	}
	// }	

	/**
	 * Sets an CSR Register by Name in the simulator.
	 * Automatically transforms value into an 32bit signed integer
	 * If value is bigger then INT_MAXVALUE the value is wrapping around according to two-complement format.
	 * @param reg The register with value
	 */
	 public setCsrRegisterByName(name: string, value: number) {
		let pureInt = value;
		let twoComplementInt = ~~pureInt; // ~~ "Trick" taken from https://stackoverflow.com/a/37022667
		simulator.driver.setCsrRegisterByName(name, twoComplementInt);
	}

	/**
	 * Sets if the runtime should stop at Breakpoints
	 * @param value If true the runtime stops at Breakpoints
	 */
	public setStopAtBreakpoint(value: boolean) {
		this._stopAtBreakpoint = value;
	}


	/**
	 * Step to the next/previous non empty line. Also steps into functions
	 */
	public step(reverse = false) {
		if (reverse) {
			simulator.driver.undo();
		} else {
			simulator.driver.step();
			this.updateStack();
		}
		this.updateMemory();
		if (simulator.driver.isFinished()) {
			this.sendEvent('end');
		} else {
			this.sendEvent('stopOnStep');
		}
	}

	/**
	 * Steps to the next instruction. Doesn't jump into functions
	 */
	public stepOver() {		
		this.initiateRun(EscapeCondidtion.stepOver);
	}

	/**
	 * Step out of the current function
	 */
	public stepOut() {
		this.initiateRun(EscapeCondidtion.stepOut);
	}

	/** Run until end or breakpoint */
	public run() {
        this.initiateRun(EscapeCondidtion.continue);
    }

	/**
	 * Stop execution
	 */
	public stop() {
        simulator.driver.handleNotExitOver();
		clearTimeout(simulator.driver.timer);
		simulator.driver.timer = null;
		this.sendEvent('end');
	}

	// In the following the run functions are declared
	// The run operation is split into multiple functions because we can't block the Javascript event loop
	// If we block the event loop the simulator can't respond

	static readonly _timeoutTime = 10;
	static readonly _timeoutCycles = 100;

	/** This starts a long running code sequence, for example when clickling continue in the UI */
	public initiateRun(escapeCondition: EscapeCondidtion) {
        if (simulator.driver.timer != null) {
            this.runEnd();
        } else {
            try {
				switch (escapeCondition) {
					case EscapeCondidtion.continue:
						this.runStep(); // walk past breakpoint
                		simulator.driver.timer = setTimeout(this.runStart.bind(this), VenusRuntime._timeoutTime, EscapeCondidtion.continue);
						break;
					case EscapeCondidtion.stepOver:
						let desiredStackDepth = this._functionStack.length; // Need to set desired stack depth before stepping. Stack size can change when stepping
						this.runStep(); // walk past breakpoint
						simulator.driver.timer = setTimeout(this.runStart.bind(this), VenusRuntime._timeoutTime, EscapeCondidtion.stepOver, desiredStackDepth);
						break;
					case EscapeCondidtion.stepOut:
						let desStackDepth = this._functionStack.length - 1; // Need to set desired stack depth before stepping. Stack size can change when stepping
						this.runStep(); // walk past breakpoint
						if (desStackDepth <= 0) { // If we are in the main function we can't step out, we run with continue. TODO: Evaluate if this is the wanted behaviour
							simulator.driver.timer = setTimeout(this.runStart.bind(this), VenusRuntime._timeoutTime, EscapeCondidtion.continue);
						} else {
							simulator.driver.timer = setTimeout(this.runStart.bind(this), VenusRuntime._timeoutTime, EscapeCondidtion.stepOut, desStackDepth);
						}
						break;
				}
            } catch (e) {
                this.runEnd();
                simulator.driver.handleError("initiateRun", e);
            }
        }
    }

	/** Runs a long running code sequence. Timeouts from time to time to not block the event loop */
	private runStart(escapeCondition: EscapeCondidtion, wantedStackDepth?: number) {
        try {
            var cycles = 0;
            while (cycles < VenusRuntime._timeoutCycles) {
                switch (escapeCondition) {
					case EscapeCondidtion.continue:
						if (simulator.driver.sim.isDone() || (simulator.driver.sim.atBreakpoint() && this._stopAtBreakpoint)) {
							simulator.driver.exitcodecheck();
							this.runEnd();
							return;
						}
						break;
					case EscapeCondidtion.stepOver:
						if (simulator.driver.isFinished() || (this._functionStack.length <= wantedStackDepth!)) {
							simulator.driver.exitcodecheck();
							this.runEnd();
							return;
						}
						break;
					case EscapeCondidtion.stepOut:
						if (simulator.driver.isFinished() || (this._functionStack.length <= wantedStackDepth!)) {
							simulator.driver.exitcodecheck();
							this.runEnd();
							return;
						}
						break;
                }

                simulator.driver.handleNotExitOver();
                this.runStep();
                cycles++;
            }

            simulator.driver.timer = setTimeout(this.runStart.bind(this), VenusRuntime._timeoutTime, escapeCondition, wantedStackDepth);
        } catch (e) {
            this.runEnd();
            simulator.driver.handleError("RunStart", e);
        }
    }

	/** Ends a long running code sequence*/
    private runEnd() {
        simulator.driver.handleNotExitOver();
		clearTimeout(simulator.driver.timer);

		simulator.driver.timer = null;
		this.updateMemory();
		if (simulator.driver.sim.isDone()) {
			this.sendEvent('end');
		} else if (simulator.driver.sim.atBreakpoint()) {
			this.sendEvent('stopOnBreakpoint');
		} else {
			this.sendEvent('stopOnStep');
		}
	}

	/** A wrapper for the simulator step function. Everything that should be updated when stepping is additionally called here. */
	private runStep() {
		simulator.driver.sim.step();
		this.updateStack();
	}

	private updateStack() {
		const jumpRegex = new RegExp("jalr?\\sx1");

		let instInfo = simulator.driver.getCurrentInstruction();

		var assemblyLine: AssemblyLine = {pc: instInfo.pc, mCode: instInfo.mcode, basicCode: instInfo.basicCode, assemblyViewLine: 0, sourceLine: 0, sourcePath: "unkown"};

		let pc = simulator.driver.sim.getPC();
		let instruction = this.pcToAssemblyLine.get(pc);
		if (instruction) {
			assemblyLine.assemblyViewLine = instruction.assemblyViewLine;
			assemblyLine.sourceLine = instruction.sourceLine;
			assemblyLine.sourcePath = instruction.sourcePath;
		}
		const lineadditive = 0;


		if (assemblyLine) {
			const lineContent = assemblyLine.basicCode;

			if (this._functionStack.length > 0 && this._functionStack[0].name.startsWith("jalr x0")) {
				this._functionStack.shift();
				this._functionStack.shift();
			} else if (this._functionStack.length > 0 && jumpRegex.test(this._functionStack[0].name)) {
				// if there is a jump we keep the jump on the stack
			} else {
				this._functionStack.shift();
			}

			this._functionStack.unshift({
					index: 0,
					name: lineContent,
					file: assemblyLine.sourcePath,
					line: assemblyLine.sourceLine + lineadditive // the top element on the stack defines the highlighted line in the editor!!!
				});

		}
	}

	/**
	 * Returns a stacktrace which is build at each execution step. This function just returns it.
	 */
	public stack(startFrame: number, endFrame: number): any {

		return {
			frames: this._functionStack,
			count: this._functionStack.length
		};

	}

	/*
	 * Set breakpoint in file with given line.
	 */
	public setBreakPoint(path: string, line: number) : VenusBreakpoint {

		const bp = <VenusBreakpoint> { verified: false, line, id: this._breakpointId++ };
		let bps = this._breakPoints.get(path);
		if (!bps) {
			bps = new Array<VenusBreakpoint>();
			this._breakPoints.set(path, bps);
		}
		bps.push(bp);

		this.verifyBreakpoints(path);

		this.toggleBreakpoint(path, bp.line);

		return bp;
	}

	/*
	 * Clear breakpoint in file with given line.
	 */
	public clearBreakPoint(path: string, line: number) : VenusBreakpoint | undefined {
		let bps = this._breakPoints.get(path);
		if (bps) {
			const index = bps.findIndex(bp => bp.line === line);
			if (index >= 0) {
				const bp = bps[index];
				bps.splice(index, 1);
				return bp;
			}
		}
		return undefined;
	}

	/*
	 * Clear all breakpoints for file.
	 */
	public clearBreakpoints(path: string): void {
		const bps = this._breakPoints.get(path);
		if (bps) {
			bps.forEach(bp => this.toggleBreakpoint(path, bp.line));
		}
		this._breakPoints.delete(path);
	}


	// private methods

	private verifyBreakpoints(path: string) : void {
		let bps = this._breakPoints.get(path);
		if (bps) {
			let sourceLines = readFileSync(path).toString().split('\n');
			bps.forEach(bp => {
				if (!bp.verified && bp.line < sourceLines.length) {
					const srcLine = sourceLines[bp.line].trim();

					let pc = this.sourceLineToPc.get(this.createSourcelineString(path, bp.line));
					if (pc === null) {
						bp.verified = false;
					} else {
						bp.verified = true;
						this.sendEvent('breakpointValidated', bp);
					}

				}
			});
		}
	}


	private toggleBreakpoint(path: string, line: number) {
		let pc = this.sourceLineToPc.get(this.createSourcelineString(path, line));
		const maximumLineNumber = this._maximumLineNumber.get(path);
		if(!pc && maximumLineNumber) {
			let realLine = line + 1;
			while (!pc && realLine < maximumLineNumber) {
				pc = this.sourceLineToPc.get(this.createSourcelineString(path, realLine));
				realLine++;
			}
		}
		if (pc) {
			pc.forEach(progcounter => {
				simulator.driver.toggleBreakpoint(progcounter);
			});
		}
	}

	private sendEvent(event: string, ... args: any[]) {
		setImmediate(_ => {
			this.emit(event, ...args);
		});
	}

	public static registerECallReceiver(func: (json: string) => void) {
		simulator.driver.registerECallReceiver(func);
	}

	private updateMemory() {
		MemoryUI.getInstance().update();
	}

}
