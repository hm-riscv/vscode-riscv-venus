import * as vscode from 'vscode';
import { DisassemblyDecoratorProvider } from './assemblyDecorator';
import { AssemblyLine, VenusRuntime } from './venusRuntime';

export interface AssemblyLineInfo {
	line: number;
	pc: number;
    mCode: number;
    basicCode: string;
}

const riscvAsmScheme = 'venus_asm';

export class riscvDisassemblyProvider implements vscode.TextDocumentContentProvider {

	onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>();
	onDidChange = this.onDidChangeEmitter.event;
	private text: string = "";

	setText(text: string, uri: vscode.Uri) {
		this.text = text
		// This line is crucial to inform VSCode that the content of the Uri changed. It then updates all Documents with that uri.
		this.onDidChangeEmitter.fire(uri)
	}

	provideTextDocumentContent(uri: vscode.Uri, token: vscode.CancellationToken): string {
		return this.text;
	}

	static decoratorLineInfoToString(infos: Map<number, AssemblyLine>): string {

		let lineNo = 0;
		let uriText: string = "";

		for (let info of infos.entries()) {
			let pchex = '0x' + ('00000000' + info[1].pc.toString(16).toUpperCase()).slice(-8); //0xFFFFFFFF
			let mcodehex = '0x' + ('00000000' + info[1].mCode.toString(16).toUpperCase()).slice(-8); //0xFFFFFFFF
			let line : string = `${pchex}\t\t${mcodehex}\t\t${info[1].basicCode}\n`
			info[1].assemblyViewLine = lineNo;
			lineNo++;
			uriText += line;
		}

		return uriText
	}

	static createUri(title: string): vscode.Uri {
		return vscode.Uri.parse('venus_asm:' + title)
	}
}

export class AssemblyView {

	private static instance: AssemblyView;

	private _isOpen: boolean;
	private _editor: vscode.TextEditor;
	private subscriptions: vscode.Disposable[];
	private _runtime: VenusRuntime

	public static getInstance(): AssemblyView {
        if (!AssemblyView.instance) {
            AssemblyView.instance = new AssemblyView();
        }

        return AssemblyView.instance;
	}

	public async updateDisassemblyView(runtime: VenusRuntime, openWindow: boolean) {

		this._runtime = runtime
		this.close() // Cleanup old data

		let provider = new riscvDisassemblyProvider()
		this.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider(riscvAsmScheme, provider));

		// Create Uri, set the text of our content provider and open the document.
		// Opening the document doesn't show a window. Think of it like opening a file on the filesystem.
		let assemblyUri = riscvDisassemblyProvider.createUri("assembly")
		provider.setText(riscvDisassemblyProvider.decoratorLineInfoToString(this._runtime.getPcToAssemblyLine()), assemblyUri);
		let _assemblyDocument = await vscode.workspace.openTextDocument(assemblyUri); // calls back into the provider
		vscode.languages.setTextDocumentLanguage(_assemblyDocument, "riscv")

		if (openWindow) {
			// If there is an assembly already open we try to get is viewcolumn and show the document in the same column.
			// If there is already an editor open that one is shown. Otherwise a new one is created Beside
			let viewColumn: vscode.ViewColumn | undefined;
			viewColumn = this._editor?.viewColumn
			this._editor = await vscode.window.showTextDocument(_assemblyDocument, { preview: false , viewColumn: viewColumn ? viewColumn : vscode.ViewColumn.Beside});
		}

		/** If we have have the assembly editor in the background all it's decorators are destroyed.
		 * So we create the decorators again if the assembly editor is brought to the foreground.
		*/
		this.updateDecorators()

		this.subscriptions.push(vscode.window.onDidChangeActiveTextEditor((e) => {
			if (e != null && e.document != null) {
				if(e.document == this._editor.document) {
					this._editor = e;
					DisassemblyDecoratorProvider.updateDecorators(this._editor, this._runtime.getCurrentAssemlyLineNo());
				}
			}
			})
		);
	}

	get isOpen() {
		return this._isOpen
	}

	public close() {
		if (this.subscriptions != null) {
			for (let i = 0; i > this.subscriptions.length; i++) {
				let disposable = this.subscriptions[i]
				try {
					disposable.dispose()
				} catch {
				}
			}
		}
		this.subscriptions = []
	}

	public updateDecorators() {
		if (this._editor != null) {
			DisassemblyDecoratorProvider.updateDecorators(this._editor, this._runtime.getCurrentAssemlyLineNo())
		}
	}
}