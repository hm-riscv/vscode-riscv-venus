import * as vscode from 'vscode';

const debugLine: vscode.TextEditorDecorationType = vscode.window.createTextEditorDecorationType({
	backgroundColor: {id: 'venus.debugLineBackground'},
	isWholeLine: true
});
/**
 * CodelensProvider
 */
export class DisassemblyDecoratorProvider {

    public static updateDecorators(editor: vscode.TextEditor, line: number) {
		if (line >= 0) {
			let range = editor.document.validateRange(
				new vscode.Range(line, Number.MAX_SAFE_INTEGER, line, Number.MAX_SAFE_INTEGER)
			);

			editor.setDecorations(debugLine, [range]);
			editor.revealRange(range, vscode.TextEditorRevealType.InCenterIfOutsideViewport)
		}
    }
}