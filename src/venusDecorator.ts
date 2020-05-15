import * as vscode from 'vscode';


export interface DecoratorLineInfo {
	line: number;
	pc: number;
    mCode: number;
    basicCode: string;
}

const annotationDecoration: vscode.TextEditorDecorationType = vscode.window.createTextEditorDecorationType({
	after: {
		margin: '0 0 0 3em',
		textDecoration: 'none'
	},
	rangeBehavior: vscode.DecorationRangeBehavior.ClosedOpen
});
/**
 * CodelensProvider
 */
export class VenusDecoratorProvider {

    public static updateDecorators(editor: vscode.TextEditor, infos: DecoratorLineInfo[]) {

        const decorations: vscode.DecorationOptions[] = [];

		for (let info of infos) {
			const decoration = VenusDecoratorProvider.trailing(
                info.pc,
                info.mCode.toString(),
                info.basicCode,
                true
			) as vscode.DecorationOptions;

            decoration.range = editor.document.validateRange(
				new vscode.Range(info.line, Number.MAX_SAFE_INTEGER, info.line, Number.MAX_SAFE_INTEGER)
			);

			decorations.push(decoration);
        }

		editor.setDecorations(annotationDecoration, decorations);
    }


    static trailing(
		pc: number,
        mCode: string,
        basicCode: string,
        scrollable: boolean
	): Partial<vscode.DecorationOptions> {

        const message: string = "PC: " + pc.toString() + "    MCode: " + mCode +  "    BasicCode: " + basicCode;

		return {
			renderOptions: {
				after: {
					backgroundColor: new vscode.ThemeColor('textCodeBlock.background'),
					color: new vscode.ThemeColor('textLink.foreground'),
					contentText: message,
					fontWeight: 'normal',
					fontStyle: 'normal',
					// Pull the decoration out of the document flow if we want to be scrollable
					textDecoration: `none;${scrollable ? '' : ' position: absolute;'}`
				}
			}
		};
	}


}