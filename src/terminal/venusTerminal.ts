import * as vscode from 'vscode';
import { cursorTo } from 'readline';

export class venusTerminal {
	private static writeEmitter = new vscode.EventEmitter<string>();
	public static inputEmitter = new vscode.EventEmitter<string>();
	private static closeEmitter = new vscode.EventEmitter<number | void>();
	private static isOpen: boolean = false;
	/** This holds what we want wo write to the console, if the console is in background. Because we can only write to the console if it is showing */
	private static backgroundStringBuffer = '';
	/** The current position of our cursor */
	private static cursorPos = 0;

	private static charRegex = RegExp("^[a-zA-Z0-9]+$");

	/** This buffers the last input that we sent. Input is sent with enter. */
	private static inputBuffer: string | null = null;
	/** If input is currently activated for this console */
	private static inputActivated: boolean = false;
	/** This is what is currently input into the console. */
	private static currentline = '';
	/** This bool specifies if the current message comes from the user typing directly into the console or from sending text through a function */
	private static isSystemMessage: boolean = false;
	private static readonly pty: vscode.Pseudoterminal = {
		onDidWrite: venusTerminal.writeEmitter.event,
		onDidClose: venusTerminal.closeEmitter.event,
		open: () => {
			venusTerminal.isOpen = true;
			venusTerminal.writeEmitter.fire(venusTerminal.backgroundStringBuffer);
			venusTerminal.backgroundStringBuffer = '';
			venusTerminal.cursorPos = 0;
		},
		close: () => {
			venusTerminal.isOpen = false;
			venusTerminal.terminal?.dispose();
			venusTerminal.terminal = null;
		},
		handleInput: (data: string) => {
			if (venusTerminal.isOpen && (venusTerminal.inputActivated || venusTerminal.isSystemMessage)) {
				if (data.endsWith('\r')) { // Enter
					venusTerminal.writeEmitter.fire(data + '\n');
					if (venusTerminal.inputActivated) {
						venusTerminal.inputBuffer = venusTerminal.currentline.replace("\r", "");
						venusTerminal.deactivateInput();
					}
					venusTerminal.currentline = '';
					venusTerminal.cursorPos = 0;
					return;
				}
				if (data === '\x7f') { // Backspace
					if (venusTerminal.currentline.length === 0) {
						return;
					}
					venusTerminal.currentline = venusTerminal.removeByIndex(venusTerminal.currentline, venusTerminal.cursorPos - 1)
					//venusTerminal.line = venusTerminal.line.substr(0, venusTerminal.line.length - 1);
					// Move cursor backward
					venusTerminal.writeEmitter.fire('\x1b[D');
					// Delete character
					venusTerminal.writeEmitter.fire('\x1b[P');
					venusTerminal.cursorPos -= 1;
					return;
				}
				if (data === '\x1b[D') { // Left
					if (venusTerminal.currentline.length !== 0 && venusTerminal.cursorPos > 0) {
						venusTerminal.writeEmitter.fire('\x1b[D');
						venusTerminal.cursorPos -= 1;
					}
					return;
				}
				if (data === '\x1b[C') { // Right
					if (venusTerminal.cursorPos < venusTerminal.currentline.length) {
						venusTerminal.writeEmitter.fire('\x1b[C');
						venusTerminal.cursorPos++;
					}
					return;
				}
				if (data === '\x1b[3~') { // Delete
					if (venusTerminal.currentline.length !== 0 && venusTerminal.cursorPos < venusTerminal.currentline.length) {
						venusTerminal.currentline = venusTerminal.removeByIndex(venusTerminal.currentline, venusTerminal.cursorPos);
						venusTerminal.writeEmitter.fire('\x1b[P');
					}
					return;
				}
				if (data === "\u0003") { // ctrl+c
					venusTerminal.writeEmitter.fire('\u0003' + '\r\n');
					venusTerminal.currentline = "";
					venusTerminal.cursorPos = 0;
					venusTerminal.deactivateInput();
					return;
				}
				if (data.length == 1 && data != '\t') { // Tabs mess with other things currently so we dont support them
					venusTerminal.currentline = venusTerminal.setCharAt(venusTerminal.currentline, venusTerminal.cursorPos, data);
					venusTerminal.writeEmitter.fire(data);
					venusTerminal.cursorPos++;
					return;
				}

			} else { // When the terminal is in backgroud we store what was written to the console in a buffer
				venusTerminal.backgroundStringBuffer += data;
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
			venusTerminal.deactivateInput()
		}
	}

	/** Close the terminal */
	public static dispose() {
		venusTerminal.isOpen = false
		venusTerminal.terminal?.dispose()
		venusTerminal.terminal = null;
	}

	public static appendLine(text: string,) {
		if (text.length > 0) {
			let formerState = venusTerminal.inputActivated
			venusTerminal.inputActivated = false
			venusTerminal.isSystemMessage = true
			//venusTerminal.resetInputBuffer()
			venusTerminal.currentline = '';
			venusTerminal.cursorPos = 0;
			venusTerminal.pty.handleInput!(text + '\r')
			venusTerminal.isSystemMessage = false
			venusTerminal.inputActivated = formerState
			venusTerminal.show()
		}
	}

	public static activateInput() {
		venusTerminal.inputBuffer = null
		venusTerminal.inputActivated = true
	}

	public static deactivateInput() {
		venusTerminal.inputActivated = false
	}

	public static waitingForInput(): boolean {
		return venusTerminal.inputActivated
	}

	public static getInputBuffer() {
		return venusTerminal.inputBuffer
	}

	/** Reads the first char of the input Buffer and removes it from the buffer. The first char is the leftmost or first in the buffer
	 *  If the input is fully consumed returns null.
	 */
	public static consumeInputBuffer() : string | null {
		if (venusTerminal.inputBuffer == null || venusTerminal.inputBuffer?.length == 0) {
			venusTerminal.inputBuffer = null
			return null
		} else {
			let char = venusTerminal.inputBuffer.charAt(0)
			venusTerminal.inputBuffer = venusTerminal.inputBuffer.substring(1)
			return char
		}
	}

	public static resetInputBuffer() {
		return venusTerminal.inputBuffer = null
	}
}