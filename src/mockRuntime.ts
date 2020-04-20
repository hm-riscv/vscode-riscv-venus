/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import { readFileSync } from 'fs';
import { EventEmitter } from 'events';
import simulator = require('./runtime/riscvSimulator');
import { CommentThreadCollapsibleState } from 'vscode';

export interface MockBreakpoint {
	id: number;
	line: number;
	verified: boolean;
}

/**
 * A Mock runtime with minimal debugger functionality.
 */
export class VenusRuntime extends EventEmitter {

	// the initial (and one and only) file we are 'debugging'
	private _sourceFile: string;
	public get sourceFile() {
		return this._sourceFile;
	}

	// the contents (= lines) of the one and only file
	private _sourceLines: string[];


	// maps from sourceFile to array of Mock breakpoints
	private _breakPoints = new Map<string, MockBreakpoint[]>();

	// since we want to send breakpoint events, we will assign an id to every event
	// so that the frontend can match events with breakpoints.
	private _breakpointId = 1;

	private _breakAddresses = new Set<string>();

	constructor() {
		super();
	}

	private line_to_pc: Map<number, number> = new Map<number, number>();
	private pc_to_line: Map<number, number> = new Map<number, number>();

	/**
	 * Start executing the given program.
	 */
	public start(program: string, stopOnEntry: boolean) {
		if (stopOnEntry) {
			this.sendEvent('stopOnEntry');
		} else {
			// we just start to run until we hit a breakpoint or an exception
			this.continue();
		}
	}

	public assemble(program: string) {
		let text: string = readFileSync(program).toString();
		simulator.frontendAPI.setText(text);
		simulator.driver.assembleSimulator(); // TODO usually Renderer fires a popup on error (e.g. malformed instruction) that something went wrong

		this.line_to_pc.clear();
		this.pc_to_line.clear();
		for (let i = 0; i < simulator.driver.sim.linkedProgram.prog.insts.size; i++) {
			let programDebug = simulator.driver.sim.linkedProgram.dbg.toArray()[i];
			// val programName: String, val dbg: DebugInfo
			let dbg = programDebug.dbg;
			// val lineNo: Int, val line: String, val address: Int, val prog: Program
			let line = dbg.lineNo;
			//let mcode = simulator.driver.sim.linkedProgram.prog.insts.toArray()[i];
			let pc = simulator.driver.sim.instOrderMapping.get_11rb$(i);
			this.line_to_pc.set(line, pc);
			this.pc_to_line.set(pc, line);
		}
	}

	// MOCK RUNTIME DEFINED METHODS


	/**
	 * Step to the next/previous non empty line.
	 */
	public step(reverse = false) {
		if (reverse) {
			simulator.driver.undo()
		} else {
			simulator.driver.step()
		}
		this.sendEvent('stopOnStep')
	}

	/**
	 * Continue execution to the end/beginning.
	 */
	public continue() {
		simulator.driver.run()
		this.sendEvent('stopOnBreakpoint')
	}

	/**
	 * Returns a fake 'stacktrace' where every 'stackframe' is a word from the current line.
	 */
	public stack(startFrame: number, endFrame: number): any {

		const lineContent = this._sourceLines[this.getCurrentLine()];

		const frames = new Array<any>();
		frames.push({
			index: null,
			name: lineContent,
			file: this._sourceFile,
			line: this.getCurrentLine() // the top element on the stack defines the highlighted line in the editor!!!
		});
		return {
			frames: frames,
			count: frames.length
		};
	}

	public getBreakpoints(path: string, line: number): number[] {

		const l = this._sourceLines[line];

		let sawSpace = true;
		const bps: number[] = [];
		for (let i = 0; i < l.length; i++) {
			if (l[i] !== ' ') {
				if (sawSpace) {
					bps.push(i);
					sawSpace = false;
				}
			} else {
				sawSpace = true;
			}
		}

		return bps;
	}

	/*
	 * Set breakpoint in file with given line.
	 */
	public setBreakPoint(path: string, line: number) : MockBreakpoint {

		const bp = <MockBreakpoint> { verified: false, line, id: this._breakpointId++ };
		let bps = this._breakPoints.get(path);
		if (!bps) {
			bps = new Array<MockBreakpoint>();
			this._breakPoints.set(path, bps);
		}
		bps.push(bp);

		this.verifyBreakpoints(path);

		this.toggleBreakpoint(bp.line)

		return bp;
	}

	/*
	 * Clear breakpoint in file with given line.
	 */
	public clearBreakPoint(path: string, line: number) : MockBreakpoint | undefined {
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
			bps.forEach(bp => this.toggleBreakpoint(bp.line));
		}
		this._breakPoints.delete(path);
	}

	/*
	 * Set data breakpoint.
	 */
	public setDataBreakpoint(address: string): boolean {
		if (address) {
			this._breakAddresses.add(address);
			return true;
		}
		return false;
	}

	/*
	 * Clear all data breakpoints.
	 */
	public clearAllDataBreakpoints(): void {
		this._breakAddresses.clear();
	}

	// private methods

	private loadSource(file: string) {
		if (this._sourceFile !== file) {
			this._sourceFile = file;
			this._sourceLines = readFileSync(this._sourceFile).toString().split('\n');
		}
	}

	/**
	 * Run through the file.
	 * If stepEvent is specified only run a single step and emit the stepEvent.
	 */
	private run(reverse = false, stepEvent?: string) {
		if (reverse) {
			for (let ln = this.getCurrentLine()-1; ln >= 0; ln--) {
				if (this.fireEventsForLine(ln, stepEvent)) {
					// this.getCurrentLine() = ln;
					return;
				}
			}
			// no more lines: stop at first line
			// this.getCurrentLine() = 0;
			this.sendEvent('stopOnEntry');
		} else {
			for (let ln = this.getCurrentLine()+1; ln < this._sourceLines.length; ln++) {
				if (this.fireEventsForLine(ln, stepEvent)) {
					//this.getCurrentLine() = ln;
					return true;
				}
			}
			// no more lines: run to end
			this.sendEvent('end');
		}
	}

	private verifyBreakpoints(path: string) : void {
		let bps = this._breakPoints.get(path);
		if (bps) {
			this.loadSource(path);
			bps.forEach(bp => {
				if (!bp.verified && bp.line < this._sourceLines.length) {
					const srcLine = this._sourceLines[bp.line].trim();

					// if a line is empty or starts with '+' we don't allow to set a breakpoint but move the breakpoint down
					if (srcLine.length === 0 || srcLine.indexOf('+') === 0) {
						bp.line++;
					}
					// if a line starts with '-' we don't allow to set a breakpoint but move the breakpoint up
					if (srcLine.indexOf('-') === 0) {
						bp.line--;
					}
					// don't set 'verified' to true if the line contains the word 'lazy'
					// in this case the breakpoint will be verified 'lazy' after hitting it once.
					if (srcLine.indexOf('lazy') < 0) {
						bp.verified = true;
						this.sendEvent('breakpointValidated', bp);
					}
				}
			});
		}
	}

	/**
	 * Fire events if line has a breakpoint or the word 'exception' is found.
	 * Returns true is execution needs to stop.
	 */
	private fireEventsForLine(ln: number, stepEvent?: string): boolean {

		const line = this._sourceLines[ln].trim();

		// if 'log(...)' found in source -> send argument to debug console
		const matches = /log\((.*)\)/.exec(line);
		if (matches && matches.length === 2) {
			this.sendEvent('output', matches[1], this._sourceFile, ln, matches.index)
		}

		// if a word in a line matches a data breakpoint, fire a 'dataBreakpoint' event
		const words = line.split(" ");
		for (let word of words) {
			if (this._breakAddresses.has(word)) {
				this.sendEvent('stopOnDataBreakpoint');
				return true;
			}
		}

		// if word 'exception' found in source -> throw exception
		if (line.indexOf('exception') >= 0) {
			this.sendEvent('stopOnException');
			return true;
		}

		// is there a breakpoint?
		const breakpoints = this._breakPoints.get(this._sourceFile);
		if (breakpoints) {
			const bps = breakpoints.filter(bp => bp.line === ln);
			if (bps.length > 0) {

				// send 'stopped' event
				this.sendEvent('stopOnBreakpoint');

				// the following shows the use of 'breakpoint' events to update properties of a breakpoint in the UI
				// if breakpoint is not yet verified, verify it now and send a 'breakpoint' update event
				if (!bps[0].verified) {
					bps[0].verified = true;
					this.sendEvent('breakpointValidated', bps[0]);
				}
				return true;
			}
		}

		// non-empty line
		if (stepEvent && line.length > 0) {
			this.sendEvent(stepEvent);
			return true;
		}

		// nothing interesting found -> continue
		return false;
	}

	private toggleBreakpoint(line: number) {
		simulator.driver.toggleBreakpoint(this.line_to_pc.get(line));
	}

	/**
	 * Current line
	 * Starts with 0, this means: Editor line 1 == Current line 0
	 */
	private getCurrentLine(): number {
		const pc: number = simulator.driver.sim.getPC()
		let line = this.pc_to_line.get(pc)
		if (!line) {
			console.warn("Cannot get current line. Unknown program counter.")
			line = 1
		}
		return line - 1
	}

	private sendEvent(event: string, ... args: any[]) {
		setImmediate(_ => {
			this.emit(event, ...args);
		});
	}
}