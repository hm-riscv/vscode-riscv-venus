/**
 * The view is a composite of a register-, memory-, cache-view.
 * Only memory-view is implemented, yet.
 * Hence there is no need for the other views.
 * They might be useful for future development, though.
 */
(function removeLegacyHTMLElements() {
	document.getElementById('register-tab-view').remove();
	document.getElementById('cache-tab-view').remove();
	document.getElementById('navigation-bar').remove();
})();

const vscode = acquireVsCodeApi();

/**
 * Driver mainly communicates from the web view to the debug extension
 */
window.driver = {
	moveMemoryJump: () => {
		const jumpSelect = document.getElementById('address-jump');
		const memorySegment = jumpSelect.value;
		jumpSelect.selectedIndex = 0;
		vscode.postMessage({
			command: 'moveMemoryJump',
			segment: memorySegment
		});
	},
	moveMemoryLocation: (memAddress) => {
		vscode.postMessage({
			command: 'moveMemoryLocation',
			memAddress
		});
	},
	moveMemoryUp: () => vscode.postMessage({command: 'moveMemoryUp'}),
	moveMemoryDown: () => vscode.postMessage({command: 'moveMemoryDown'}),
	updateRegMemDisplay: (displayType) => vscode.postMessage({command: 'updateDisplayType', displayType}),
	updateBytesPerRowDisplay: (bytesPerRow) => vscode.postMessage({command: 'updateBytesPerRow', bytesPerRow}),
};


/**
 * Handle communciation from debug extension to web view
 */
window.addEventListener('message', event => {

	const message = event.data; // The JSON data our extension sent

	switch (message.command) {
		case 'loadState':
			let state = message.uiState;
			console.log('Loading inital state');
			break;
		case 'updateMemory':
			const { lines } = message;
			for (const {rowIdx, rowAddr, bytes} of lines) {
				renderMemoryRow(rowIdx, rowAddr, bytes);
			}
			break;
	}
});

/**
 * Source: RendererOriginal.kt
 */
function cleanTableRow(row) {
	for (const n of row.childNodes) {
		if (!(n instanceof HTMLTableCellElement)) {
			row.removeChild(n);
		}
	}
	return row;
}

function getDisplayType() {
	return document.getElementById('display-settings').value;
}

/**
 * Source: RendererOriginal.kt
 * slightly modified due to language differences (kt => js)
 * @param {number} rowIdx
 * @param {number} rowAddr
 * @param {Array<string>} bytes in hex, bin, dec, ascii or unsigned encoding
 */
function renderMemoryRow(rowIdx, rowAddr, bytes) {
	// Main row triggers change of visibility of columns
	if (rowIdx == 0) {
		formatMemTable(bytes.length);
	} 
	// Update table cells according to sent data
	let row = document.getElementById("mem-row-" + rowIdx);
	row = cleanTableRow(row);
	const tdAddress = row.childNodes[0];
	if (rowAddr >= 0) {
		tdAddress.textContent = "0x" + rowAddr.toString(16).toUpperCase().padStart(8, "0");
		for (let i = 0; i < bytes.length; i++) {
			const byte = bytes[i];
			const tdByte = row.childNodes[i + 1];
			tdByte.textContent = byte;
		}
	} else {
		tdAddress.textContent = "----------";
		for (i = 0; i < 4; i++) {
			const tdByte = row.childNodes[i + 1];
			tdByte.textContent = "--";
		}
	}
}

/**
 * formatMemTable: formats the HTML memory table according to the lines per
 * row that shall be shown by hiding superfluous columns and adjusting headers
 * @param {number} colPerRow  number of columns to show per row
 *     (the only valid numbers are 1, 2, and 4 [and the unused 3])
 */
function formatMemTable(colPerRow) {
	// Set column header text
	document.getElementById('memcolumn0-hdr').textContent = (colPerRow == 1) ? "Value" : "+0";
	// Hide superfluous columns
	for (var colIndex = 1; colIndex < 4; colIndex++) { // 1..3 since 0 does not need to be processed
		var colElems = document.getElementsByClassName("memcolumn" + colIndex + "-cell");
		var newStyle = (colIndex < colPerRow) ? "table-cell" : "none"; // "none" for hiding an element
		for (var i = 0; i < colElems.length; i++) {
			colElems[i].style.display = newStyle;
		}			
	}
}
