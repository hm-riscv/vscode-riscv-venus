import * as vscode from 'vscode'
import fs from 'fs'
import simulator = require('../runtime/riscvSimulator');

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


	public static getInstance(): MemoryUI {
		if (MemoryUI.instance) {
			return MemoryUI.instance
		} else {
			MemoryUI.instance = new MemoryUI()
			return MemoryUI.instance
		}
	}

	/** Closes the old instance if available and opens a new one */
	public static createNewInstance(): MemoryUI {
		if (MemoryUI.instance) {
			MemoryUI.instance.dispose();
		}
		MemoryUI.instance = new MemoryUI()
		return MemoryUI.instance
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

	public updateMemory(lines: any) {
		this._panel.webview.postMessage({
			command: "updateMemory",
			lines: lines
		})
	}

	public resetMemory() {

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
						simulator.driver.moveMemoryJump(message.segment);
						return;
					case 'moveMemoryLocation':
						simulator.driver.moveMemoryLocation(message.memAddress);
						return;
					case 'moveMemoryUp':
						simulator.driver.moveMemoryUp();
						return;
					case 'moveMemoryDown':
						simulator.driver.moveMemoryDown();
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

		// this._panel.webview.postMessage({command: "loadState", uiState: MemoryUI._uiState})
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

}
