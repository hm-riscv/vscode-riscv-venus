import * as vscode from 'vscode'
import fs from 'fs'

/**
 * Manages cat coding webview panels
 */
export class VenusUI {
	/**
	 * Track the currently panel. Only allow a single panel to exist at a time.
	 */
	public static instance: VenusUI | undefined;

	public static readonly viewType = 'venusUI';
	private _panel: vscode.WebviewPanel;
	private _extensionUri: vscode.Uri;
	private _disposables: vscode.Disposable[] = [];
	private static _uiState: UIState;


	public static getInstance(): VenusUI {
		if (VenusUI.instance) {
			return VenusUI.instance
		} else {
			VenusUI.instance = new VenusUI(VenusUI._uiState)
			return VenusUI.instance
		}
	}

	/** Closes the old instance if available and opens a new one */
	public static createNewInstance(uiState?: UIState): VenusUI {
		if (VenusUI.instance) {
			VenusUI.instance.dispose();
		}
		VenusUI.instance = new VenusUI(uiState)
		return VenusUI.instance
	}

	private constructor(uiState?: UIState) {
		if (uiState) {
			VenusUI._uiState = uiState;
		} else {
			VenusUI._uiState = new UIState(new LedMatrix(10, 10))
		}
	}

	public dispose() {
		VenusUI.instance = undefined;

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
		if (VenusUI.instance?._panel) {
			VenusUI.instance._panel.reveal();
		} else {
			this._addPanel(extensionUri);
		}
	}

	private _addPanel(extensionUri: vscode.Uri) {

		// Otherwise, create a new panel.
		const panel = vscode.window.createWebviewPanel(
			VenusUI.viewType,
			'Venus UI',
			vscode.ViewColumn.Beside,
			{
				// Enable javascript in the webview
				enableScripts: true,

				// And restrict the webview to only loading content from our extension's `ui` directory.
				localResourceRoots: [vscode.Uri.joinPath(extensionUri, 'src', 'ui')]
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
					case 'alert':
						vscode.window.showErrorMessage(message.text);
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

		this._panel.webview.postMessage({command: "loadState", uiState: VenusUI._uiState})
	}

	private _getHtmlForWebview(webview: vscode.Webview, ) {

		const htmlPathOnDisk = vscode.Uri.joinPath(this._extensionUri, '/src/ui/venusUI.html');
		var htmlpath = htmlPathOnDisk.fsPath;
		var html = fs.readFileSync(htmlpath).toString();

		const onDiskPath = vscode.Uri.joinPath(this._extensionUri, '/src/ui/venusUI.js');
		const scriptSrc = webview.asWebviewUri(onDiskPath);
		html = html.replace('${scriptSrc}', scriptSrc.toString());

		const stylePath = vscode.Uri.joinPath(this._extensionUri, '/src/ui/venusUI.css');
		const styleSrc = webview.asWebviewUri(stylePath);
		html = html.replace('${styleSrc}', styleSrc.toString());

		return html;
	}

	public setLed(x: number, y: number, color: Color) {
		VenusUI._uiState.getLedMatrix().setLed(x, y, color)
		if (this._panel?.visible) {
			this._panel.webview.postMessage({command: "setLed", x: x, y: y, color: color})
		}
	}

	public resetLedMatrix() {
		VenusUI._uiState.getLedMatrix().resetMatrix()
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
