import * as vscode from 'vscode';
import { DecoratorLineInfo, VenusDecoratorProvider } from './venusDecorator';

export interface AssemblyLineInfo {
	line: number;
	pc: number;
    mCode: number;
    basicCode: string;
}

export class riscvAssemblyProvider implements vscode.TextDocumentContentProvider {

	onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>();
	onDidChange = this.onDidChangeEmitter.event;
	private text: string = "";

	setText(text: string) {
		this.text = text
	}


	provideTextDocumentContent(uri: vscode.Uri, token: vscode.CancellationToken): string {
		return this.text;
	}

	static decoratorLineInfoToString(infos: AssemblyLineInfo[]): string {

		let uriText: string = "";

		for (let info of infos) {
			let pchex = '0x' + ('00000000' + info.pc.toString(16).toUpperCase()).slice(-8); //0xFFFFFFFF
			let mcodehex = '0x' + ('00000000' + info.mCode.toString(16).toUpperCase()).slice(-8); //0xFFFFFFFF
			let line : string = `${pchex}\t\t${mcodehex}\t\t${info.basicCode}\n`
			uriText += line;
		}

		return uriText
	}

	static createUri(): vscode.Uri {

		return vscode.Uri.parse('riscv_asm:disassemly')
	}
}