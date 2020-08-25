/**
 * The view is a composite of a register-, memory-, cache-view.
 * Only memory-view is implemented, yet.
 * Hence there is no need for the other views.
 * They might be useful for future development, though.
 */
(function removeLegacyHTMLElements() {
	document.getElementById('register-tab-view').remove()
	document.getElementById('cache-tab-view').remove()
	document.getElementById('navigation-bar').remove()
})()

const vscode = acquireVsCodeApi();

window.driver = {
	moveMemoryJump: () => {
		const memorySegment = document.getElementById('address-jump').value
		vscode.postMessage({
			command: 'moveMemoryJump',
			segment: memorySegment
		})
	},
	moveMemoryLocation: (memAddress) => {
		vscode.postMessage({
			command: 'moveMemoryLocation',
			memAddress
		})
	},
	moveMemoryUp: () => vscode.postMessage({command: 'moveMemoryUp'}),
	moveMemoryDown: () => vscode.postMessage({command: 'moveMemoryDown'})
}


// Handle the message inside the webview
window.addEventListener('message', event => {

	const message = event.data; // The JSON data our extension sent

	switch (message.command) {
		case 'loadState':
			let state = message.uiState;
			console.log('Loading inital state')
			break;
	}
});

