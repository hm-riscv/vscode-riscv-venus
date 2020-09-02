import * as vscode from 'vscode';
import { AssemblyLine } from './venusRuntime';

export interface AssemblyLineInfo {
	line: number;
	pc: number;
    mCode: number;
    basicCode: string;
}

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