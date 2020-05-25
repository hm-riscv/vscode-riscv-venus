import * as vscode from 'vscode';

const debugLine: vscode.TextEditorDecorationType = vscode.window.createTextEditorDecorationType({
	backgroundColor: {id: 'venus.debugLineBackground'},
	isWholeLine: true
});
/**
 * CodelensProvider
 */
export class AssemblyDecoratorProvider {

    public static updateDecorators(editor: vscode.TextEditor, line: number) {

		let range = editor.document.validateRange(
			new vscode.Range(line, Number.MAX_SAFE_INTEGER, line, Number.MAX_SAFE_INTEGER)
		);

		editor.setDecorations(debugLine, [range]);
    }
}