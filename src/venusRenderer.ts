import * as vscode from 'vscode'
import simulator = require('./runtime/riscvSimulator');
import EventEmitter = require('events');

export class VenusRenderer {

	private outputChannel: vscode.OutputChannel;
	public constructor() {

		var emitter: EventEmitter = simulator.venus.venus.Renderer.setEmitter(new EventEmitter());
		emitter.on("assembler_error", (e) => {this.showErrorWithPopup(e)});
		emitter.on("warning", (str) => {this.printWarning(str)});
		emitter.on("error", (e) => {this.printError(e)});
		emitter.on("stdout", (any) => {this.stdout(any)});
		emitter.on("printConsole", (any) => {this.printConsole(any)});
		this.outputChannel = vscode.window.createOutputChannel("venus");
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