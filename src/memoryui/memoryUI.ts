import * as vscode from 'vscode'
import fs from 'fs'

/**
 * Manages cat coding webview panels
 */
export class MemoryUI {
	/**
	 * Track the currently panel. Only allow a single panel to exist at a time.
	 */
	public static instance: MemoryUI | undefined;

	public static readonly viewType = 'venusUI';
	private _panel: vscode.WebviewPanel;
	private _extensionUri: vscode.Uri;
	private _disposables: vscode.Disposable[] = [];
	private static _uiState: UIState;


	public static getInstance(): MemoryUI {
		if (MemoryUI.instance) {
			return MemoryUI.instance
		} else {
			MemoryUI.instance = new MemoryUI(MemoryUI._uiState)
			return MemoryUI.instance
		}
	}

	/** Closes the old instance if available and opens a new one */
	public static createNewInstance(uiState?: UIState): MemoryUI {
		if (MemoryUI.instance) {
			MemoryUI.instance.dispose();
		}
		MemoryUI.instance = new MemoryUI(uiState)
		return MemoryUI.instance
	}

	private constructor(uiState?: UIState) {
		if (uiState) {
			MemoryUI._uiState = uiState;
		} else {
			MemoryUI._uiState = new UIState(new LedMatrix(10, 10))
		}
	}

	public dispose() {
		MemoryUI.instance = undefined;

		// Clean up our resources
		this._panel.dispose();

		while (this._disposables.length) {
			const x = this._disposables.pop();
			if (x) {
				x.dispose();
			}
		}
	}

	public show(extensionUri: vscode.Uri) {
		// If we already have a panel, show it.
		if (MemoryUI.instance?._panel) {
			MemoryUI.instance._panel.reveal();
		} else {
			this._addPanel(extensionUri);
		}
	}

	private _addPanel(extensionUri: vscode.Uri) {

		// Otherwise, create a new panel.
		const panel = vscode.window.createWebviewPanel(
			MemoryUI.viewType,
			'Memory',
			vscode.ViewColumn.Beside,
			{
				// Enable javascript in the webview
				enableScripts: true,

				// And restrict the webview to only loading content from our extension's `src/memoryui` directory.
				localResourceRoots: [vscode.Uri.joinPath(extensionUri, 'src', 'memoryui')]
			}
		);

		this._panel = panel;
		this._extensionUri = extensionUri;

		// Set the webview's initial html content
		this._update();

		// Listen for when the panel is disposed
		// This happens when the user closes the panel or when the panel is closed programatically
		this._panel.onDidDispose(() => this.dispose(), null, this._disposables);

		// Update the content based on view changes
		this._panel.onDidChangeViewState(
			e => {
				if (this._panel.visible) {
					this._update();
				}
			},
			null,
			this._disposables
		);

		// Handle messages from the webview
		this._panel.webview.onDidReceiveMessage(
			message => {
				switch (message.command) {
					case 'moveMemoryJump':
						vscode.window.showErrorMessage(message.segment);
						return;
					case 'moveMemoryLocation':
						vscode.window.showErrorMessage(message.memAddress);
						return;
					case 'moveMemoryUp':
						vscode.window.showErrorMessage("Move memory up");
						return;
					case 'moveMemoryDown':
						vscode.window.showErrorMessage("Move memory down");
						return;
				}
			},
			null,
			this._disposables
		);
	}

	private _update() {
		const webview = this._panel.webview;
		this._panel.webview.html = this._getHtmlForWebview(webview);

		this._panel.webview.postMessage({command: "loadState", uiState: MemoryUI._uiState})
	}

	private _getHtmlForWebview(webview: vscode.Webview, ) {

		const htmlPathOnDisk = vscode.Uri.joinPath(this._extensionUri, '/src/memoryui/memoryUI.html');
		var htmlpath = htmlPathOnDisk.fsPath;
		var html = fs.readFileSync(htmlpath).toString();

		const onDiskPath = vscode.Uri.joinPath(this._extensionUri, '/src/memoryui/memoryUI.js');
		const scriptSrc = webview.asWebviewUri(onDiskPath);
		html = html.replace('${scriptSrc}', scriptSrc.toString());

		const stylePath = vscode.Uri.joinPath(this._extensionUri, '/src/memoryui/memoryUI.css');
		const styleSrc = webview.asWebviewUri(stylePath);
		html = html.replace('${styleSrc}', styleSrc.toString());

		return html;
	}

	public setLed(x: number, y: number, color: Color) {
		MemoryUI._uiState.getLedMatrix().setLed(x, y, color)
		if (this._panel?.visible) {
			this._panel.webview.postMessage({command: "setLed", x: x, y: y, color: color})
		}
	}

	public resetLedMatrix() {
		MemoryUI._uiState.getLedMatrix().resetMatrix()
	}
}

export class UIState {
	private ledMatrix: LedMatrix

	constructor(ledMatrix: LedMatrix){
		this.ledMatrix = ledMatrix;
	};

	public getLedMatrix(): LedMatrix {
		return this.ledMatrix
	}
}

export class LedMatrix {
	private ledState: Color[]
	readonly xCount: number
	readonly yCount: number

	setLed(x: number, y: number, color: Color) {
		if ((x + y*this.xCount) < this.ledState.length){
			this.ledState[x + y*this.xCount] = color
		}
	}

	resetMatrix() {
		this.ledState = Array<Color>(this.xCount * this.yCount).fill(new Color(0,0,0))
	}

	/** The length of the led state needs to be xSize * ySize.
	 * Otherwise the leds are initialized as all off/black.
	 */
	constructor(xSize: number, ySize: number, ledState?: Color[]){
		this.xCount = xSize;
		this.yCount = ySize;
		if (ledState == null || ledState.length == (xSize * ySize)) {
			this.resetMatrix();
		} else {
			this.ledState = ledState;
		}
	};
}

export class Color {

	readonly red: number;
	readonly green: number;
	readonly blue: number;

	constructor(red: number, green: number, blue: number) {
		this.red = (red > 255) ? 255 : red;
		this.green = (green > 255) ? 255 : green;
		this.blue = (blue > 255) ? 255 : blue;
	}
}
