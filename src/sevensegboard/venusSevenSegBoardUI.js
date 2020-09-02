class SevenSegBoard {
	/**
	 *
	 * @param {element} svg The svg
	 */
	constructor() {
		this.led_0_on = document.getElementById("led_0_on");
		this.led_0_off = document.getElementById("led_0_off");
		this.led_1_on = document.getElementById("led_1_on");
		this.led_1_off = document.getElementById("led_1_off");

		this.button_0 = document.getElementById('button_0');
		this.button_1 = document.getElementById('button_1');
		this.button_0.setAttribute('onclick',"vscode.postMessage({command: 'button_pressed', which: 0})");
		this.button_1.setAttribute('onclick',"vscode.postMessage({command: 'button_pressed', which: 1})");

		this.segment = Array(2);
		this.segment[0] = Array(8);
		this.segment[0][0] = document.getElementById('sevenseg_0_a');
		this.segment[0][1] = document.getElementById('sevenseg_0_b');
		this.segment[0][2] = document.getElementById('sevenseg_0_c');
		this.segment[0][3] = document.getElementById('sevenseg_0_d');
		this.segment[0][4] = document.getElementById('sevenseg_0_e');
		this.segment[0][5] = document.getElementById('sevenseg_0_f');
		this.segment[0][6] = document.getElementById('sevenseg_0_g');
		this.segment[0][7] = document.getElementById('sevenseg_0_dp');
		this.segment[1] = Array(8);
		this.segment[1][0] = document.getElementById('sevenseg_1_a');
		this.segment[1][1] = document.getElementById('sevenseg_1_b');
		this.segment[1][2] = document.getElementById('sevenseg_1_c');
		this.segment[1][3] = document.getElementById('sevenseg_1_d');
		this.segment[1][4] = document.getElementById('sevenseg_1_e');
		this.segment[1][5] = document.getElementById('sevenseg_1_f');
		this.segment[1][6] = document.getElementById('sevenseg_1_g');
		this.segment[1][7] = document.getElementById('sevenseg_1_dp');
	}

	drawFromState(uiState) {
		this.button_0.setAttribute("style", uiState.buttonPressed[0] ? "fill:#909090" : "fill:#484848")
		this.button_1.setAttribute("style", uiState.buttonPressed[1] ? "fill:#909090" : "fill:#484848")

		this.led_0_on.setAttribute("style", uiState.led[0] ? "" : "display:none");
		this.led_0_off.setAttribute("style", uiState.led[0] ? "display:none" : "");
		this.led_1_on.setAttribute("style", uiState.led[1] ? "" : "display:none");
		this.led_1_off.setAttribute("style", uiState.led[1] ? "display:none" : "");

		this.segment[0][0].setAttribute("style", uiState.sevenSegment0[0] ? "fill:#58d45a" : "fill:#e2f6e2")
		this.segment[0][1].setAttribute("style", uiState.sevenSegment0[1] ? "fill:#58d45a" : "fill:#e2f6e2")
		this.segment[0][2].setAttribute("style", uiState.sevenSegment0[2] ? "fill:#58d45a" : "fill:#e2f6e2")
		this.segment[0][3].setAttribute("style", uiState.sevenSegment0[3] ? "fill:#58d45a" : "fill:#e2f6e2")
		this.segment[0][4].setAttribute("style", uiState.sevenSegment0[4] ? "fill:#58d45a" : "fill:#e2f6e2")
		this.segment[0][5].setAttribute("style", uiState.sevenSegment0[5] ? "fill:#58d45a" : "fill:#e2f6e2")
		this.segment[0][6].setAttribute("style", uiState.sevenSegment0[6] ? "fill:#58d45a" : "fill:#e2f6e2")
		this.segment[0][7].setAttribute("style", uiState.sevenSegment0[7] ? "fill:#58d45a" : "fill:#e2f6e2")

		this.segment[1][0].setAttribute("style", uiState.sevenSegment1[0] ? "fill:#58d45a" : "fill:#e2f6e2")
		this.segment[1][1].setAttribute("style", uiState.sevenSegment1[1] ? "fill:#58d45a" : "fill:#e2f6e2")
		this.segment[1][2].setAttribute("style", uiState.sevenSegment1[2] ? "fill:#58d45a" : "fill:#e2f6e2")
		this.segment[1][3].setAttribute("style", uiState.sevenSegment1[3] ? "fill:#58d45a" : "fill:#e2f6e2")
		this.segment[1][4].setAttribute("style", uiState.sevenSegment1[4] ? "fill:#58d45a" : "fill:#e2f6e2")
		this.segment[1][5].setAttribute("style", uiState.sevenSegment1[5] ? "fill:#58d45a" : "fill:#e2f6e2")
		this.segment[1][6].setAttribute("style", uiState.sevenSegment1[6] ? "fill:#58d45a" : "fill:#e2f6e2")
		this.segment[1][7].setAttribute("style", uiState.sevenSegment1[7] ? "fill:#58d45a" : "fill:#e2f6e2")
	}
}

const vscode = acquireVsCodeApi();
var sevensegboard = new SevenSegBoard();

// Handle the message inside the webview
window.addEventListener('message', event => {

	const message = event.data; // The JSON data our extension sent

	switch (message.command) {
		case 'loadState':
			let state = message.uiState;
			sevensegboard.drawFromState(state);
			break;
		case 'setLedRow':
			break;
	}
});

