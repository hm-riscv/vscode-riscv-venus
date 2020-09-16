import * as vscode from 'vscode';
import { cursorTo } from 'readline';

export class venusTerminal {
	private static writeEmitter = new vscode.EventEmitter<string>();
	public static inputEmitter = new vscode.EventEmitter<string>();
	private static closeEmitter = new vscode.EventEmitter<number | void>();
	private static isOpen: boolean = false;
	private static stringBuffer = '';
	private static cursorPos = 0;

	private static charRegex = RegExp("^[a-zA-Z0-9]+$");

	private static inputLine: string | null = null;
	private static inputActivated: boolean = false;

	private static line = '';
	private static readonly pty: vscode.Pseudoterminal = {
		onDidWrite: venusTerminal.writeEmitter.event,
		onDidClose: venusTerminal.closeEmitter.event,
		open: () => {
			venusTerminal.isOpen = true;
			venusTerminal.writeEmitter.fire(venusTerminal.stringBuffer);
			venusTerminal.stringBuffer = '';
			venusTerminal.cursorPos = 0;
		},
		close: () => {
			venusTerminal.isOpen = false;
			venusTerminal.terminal?.dispose();
			venusTerminal.terminal = null;
		},
		handleInput: (data: string) => {

			if (venusTerminal.isOpen) {
				if (data.endsWith('\r')) { // Enter
					venusTerminal.writeEmitter.fire(data + '\n');
					if (venusTerminal.inputActivated) {
						venusTerminal.inputLine = venusTerminal.line.replace("\r", "");
						venusTerminal.deactivateInput();
					}
					venusTerminal.line = '';
					venusTerminal.cursorPos = 0;
					return;
				}
				if (data === '\x7f') { // Backspace
					if (venusTerminal.line.length === 0) {
						return;
					}
					venusTerminal.line = venusTerminal.removeByIndex(venusTerminal.line, venusTerminal.cursorPos - 1)
					//venusTerminal.line = venusTerminal.line.substr(0, venusTerminal.line.length - 1);
					// Move cursor backward
					venusTerminal.writeEmitter.fire('\x1b[D');
					// Delete character
					venusTerminal.writeEmitter.fire('\x1b[P');
					venusTerminal.cursorPos -= 1;
					return;
				}
				if (data === '\x1b[D') { // Left
					if (venusTerminal.line.length !== 0 && venusTerminal.cursorPos > 0) {
						venusTerminal.writeEmitter.fire('\x1b[D');
						venusTerminal.cursorPos -= 1;
					}
					return;
				}
				if (data === '\x1b[C') { // Right
					if (venusTerminal.cursorPos < venusTerminal.line.length) {
						venusTerminal.writeEmitter.fire('\x1b[C');
						venusTerminal.cursorPos++;
					}
					return;
				}
				if (data === '\x1b[3~') { // Delete
					if (venusTerminal.line.length !== 0 && venusTerminal.cursorPos < venusTerminal.line.length) {
						venusTerminal.line = venusTerminal.removeByIndex(venusTerminal.line, venusTerminal.cursorPos)
						venusTerminal.writeEmitter.fire('\x1b[P');
					}
					return;
				}
				if (data === "\u0003") { // ctrl+c
					venusTerminal.writeEmitter.fire('\u0003' + '\r\n');
					venusTerminal.line = "";
					venusTerminal.cursorPos = 0;
					return;
				}
				if (data.length == 1 && data != '\t') { // Tabs mess with other things currently so we dont support them
					venusTerminal.line = venusTerminal.setCharAt(venusTerminal.line, venusTerminal.cursorPos, data);
					venusTerminal.writeEmitter.fire(data);
					venusTerminal.cursorPos++;
					return;
				}

			} else {
				venusTerminal.stringBuffer += data;
			}

		}
	};

	private static terminal: vscode.Terminal | null = null;

	private static removeByIndex(str: string, index: number) {
		if (index==0) {
			return  str.slice(1)
		} else {
			return str.slice(0,index) + str.slice(index+1);
		}
	}

	private static setCharAt(str: string ,index: number , chr: string) {
		if (index > str.length-1) {
			return str + chr;
		}
		return str.substring(0,index) + chr + str.substring(index+1);
	}

	/**
	 * Create (if necessary) and show the terminal
	 */
	public static show() {
		if (venusTerminal.terminal == null) {
			venusTerminal.terminal = vscode.window.createTerminal({ name: `Venus Terminal`, pty: venusTerminal.pty });
		}
		venusTerminal.terminal?.show();
	}

	/**
	 * Create the terminal
	 */
	public static create() {
		if (venusTerminal.terminal == null) {
			venusTerminal.terminal = vscode.window.createTerminal({ name: `Venus Terminal`, pty: venusTerminal.pty });
		}
	}

	/**
	 * Create the terminal
	 */
	public static dispose() {
		venusTerminal.isOpen = false
		venusTerminal.terminal?.dispose()
		venusTerminal.terminal = null;
	}

	public static appendLine(text: string,) {
		if (text.length > 0) {
			let formerState = venusTerminal.inputActivated
			venusTerminal.deactivateInput()
			venusTerminal.resetInputLine()
			venusTerminal.line = '';
			venusTerminal.cursorPos = 0;
			venusTerminal.pty.handleInput!(text + '\r')
			venusTerminal.inputActivated = formerState
		}
	}

	public static activateInput() {
		venusTerminal.inputLine = null
		venusTerminal.inputActivated = true
	}

	public static deactivateInput() {
		venusTerminal.inputActivated = false
	}

	public static waitingForInput(): boolean {
		return venusTerminal.inputActivated
	}

	public static getInputLine() {
		return venusTerminal.inputLine
	}

	public static resetInputLine() {
		return venusTerminal.inputLine = null
	}
}