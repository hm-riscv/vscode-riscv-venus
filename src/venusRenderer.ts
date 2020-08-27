import * as vscode from 'vscode'
import simulator = require('./runtime/riscvSimulator');
import EventEmitter = require('events');
import { MemoryUI } from './memoryui/memoryUI';
/** This is a Singleton Class. Renders output to the specified Output Channel. Also listens for events from the venus.Renderer from KotlinJS
 * and displays the appropiate Response.
  */
export class VenusRenderer {
	private static instance: VenusRenderer;
	private outputChannel: vscode.OutputChannel;
	private memoryUI: MemoryUI;

	private constructor() {
		this.memoryUI = MemoryUI.getInstance();
		var emitter: EventEmitter.EventEmitter = simulator.venus.venus.Renderer.setEmitter(new EventEmitter.EventEmitter());
		emitter.on("assembler_error", (e) => {this.showErrorWithPopup(e)});
		emitter.on("warning", (str) => {this.printWarning(str)});
		emitter.on("error", (e) => {this.printError(e)});
		emitter.on("stdout", (any) => {this.stdout(any)});
		emitter.on("printConsole", (any) => {this.printConsole(any)});
		this.outputChannel = vscode.window.createOutputChannel("venus");
	}

	public static getInstance(): VenusRenderer {
        if (!VenusRenderer.instance) {
            VenusRenderer.instance = new VenusRenderer();
        }

        return VenusRenderer.instance;
	}

	/** Maybe need to call this if outputChannel exists beyond Lifetime. */
	public static disposeOutputChannel() {
		if (VenusRenderer.instance) {
			VenusRenderer.getInstance().outputChannel.dispose();
		}
	}

	showErrorWithPopup(e: any) {
		vscode.window.showErrorMessage(e.toString());
		console.error(e.toString());
		this.outputChannel.appendLine(e.toString());
		vscode.debug.activeDebugConsole.appendLine(e.toString());
		this.outputChannel.show();
	}

	printWarning(warning: String) {
		console.warn(warning);
		this.outputChannel.appendLine(warning.toString());
		vscode.debug.activeDebugConsole.appendLine(warning.toString());

	}

	printError(e: any) {
		console.error(e.toString());
		this.outputChannel.appendLine(e.toString());
		vscode.debug.activeDebugConsole.appendLine(e.toString());


	}

	stdout(any: any) {
		console.log(any.toString());
		this.outputChannel.appendLine(any.toString());
		vscode.debug.activeDebugConsole.appendLine(any.toString());


	}

	printConsole(any: any) {
		console.log(any.toString());
		this.outputChannel.appendLine(any.toString());
		vscode.debug.activeDebugConsole.appendLine(any.toString());

	}

}
