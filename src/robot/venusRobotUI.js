class LedMatrix {

	/**
	 *
	 * @param {element} svg The svg to draw in
	 */
	constructor(svg) {
		this.xCount = 16;
		this.yCount = 12;
		this.svg = svg;
		this.offColor = "#3a3a3a";
		this.onColor = "#9ecb36";

		this.led = [];

		for (let x = 0; x < this.xCount; x++) {
			this.led[x] = [];
			for (let y = 0; y < this.yCount; y++) {
				var led = document.createElementNS("http://www.w3.org/2000/svg", "circle");
				this.led[x][y] = led;
				led.setAttribute("cx", 250-11*x);
				led.setAttribute("cy", 220-11*y);
				led.setAttribute("r", 5);
				led.setAttribute("fill", this.offColor);
				this.svg.appendChild(led);
			}
		}
	}

	clear() {
		for (let x = 0; x < this.xCount; x++) {
			for (let y = 0; y < this.yCount; y++) {
				this.setLed(x, y, false);
			}
		}
	}

	drawFromState(uiState) {
		let leds = uiState.ledMatrix.ledState;
		for (let y = 0; y < this.yCount; y++) {
			let row = leds[y]
			this.setLedRow(y, row);
		}
	}
	/**
	 *
	 * @param {number} x
	 * @param {number} y
	 * @param {boolean} on
	 */
	setLed(x, y, on) {
		if (x >= this.xCount || y >= this.yCount) {
			return
		}


		this.led[x][y].setAttribute("fill", on ? this.onColor : this.offColor);
	}

	setLedRow(row, values) {
		if (row >= this.yCount) {
			return
		}

		for (let x = 0; x < this.xCount; x++) {
			this.setLed(x, row, (values >> x) & 1);
		}
	}
}

var ledMatrix = new LedMatrix(document.getElementById("robot_svg"));

// Handle the message inside the webview
window.addEventListener('message', event => {

	const message = event.data; // The JSON data our extension sent

	switch (message.command) {
		case 'loadState':
			let state = message.uiState;
			ledMatrix.drawFromState(state);
			break;
		case 'setLedRow':
			ledMatrix.setLedRow(message.row, message.values);
			break;
	}
});

