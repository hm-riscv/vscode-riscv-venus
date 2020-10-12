import * as vscode from 'vscode';

export class VenusMenuProvider implements vscode.TreeDataProvider<VenusMenuItem> {
	constructor() {}

	getTreeItem(element: VenusMenuItem): vscode.TreeItem {
		return element;
	}

	getChildren(element?: VenusMenuItem): Thenable<VenusMenuItem[]> {
		if (element) {
			if (element.label == 'Views') {
				var items: VenusMenuItem[] = [];

				items.push(new VenusMenuItem("Assembly", "Assembly", 0, {title: 'Assembly', command: 'riscv-venus.openAssembly'} as vscode.Command))
				items.push(new VenusMenuItem("Led Matrix", "Led Matrix", 0, {title: 'Led Matrix', command: 'riscv-venus.openLedMatrixUI'} as vscode.Command))
				items.push(new VenusMenuItem("Memory", "Memory", 0, {title: 'Memory', command: 'riscv-venus.openMemory'} as vscode.Command))
				items.push(new VenusMenuItem("Seven Segment Board", "Seven Segment Board", 0, {title: 'Seven Segment Board', command: 'riscv-venus.openSevenSegBoardUI'} as vscode.Command))
				items.push(new VenusMenuItem("Robot UI", "Robot UI", 0, {title: 'Robot UI', command: 'riscv-venus.openRobotUI'} as vscode.Command))
				return Promise.resolve(items)
			}
			return Promise.resolve([]);
		} else {
			return Promise.resolve(this.getMenuItems());
		}
	}

	private getMenuItems(): VenusMenuItem[] {
		var items: VenusMenuItem[] = [];

		items.push(new VenusMenuItem("Views", "All Views", 1))
		items.push(new VenusMenuItem("Open Settings", "Settings", 0, {title: 'Open settings', command: 'riscv-venus.openSettings'} as vscode.Command))
		items.push(new VenusMenuItem("Set Variable Format", "Set Variable Format", 0, {title: 'Set Variable Format', command: 'riscv-venus.setVariableFormat'} as vscode.Command))
		items.push(new VenusMenuItem("Open Documentation", "Open Documentation", 0, {title: 'Open Documentation', command: 'riscv-venus.openDocumentation'} as vscode.Command))
		return items;
	}
}

class VenusMenuItem extends vscode.TreeItem {
	constructor(
		public readonly label: string,
		public readonly tooltip: string,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
		public command?: vscode.Command,
	) {
		super(label, collapsibleState);
	}
}