class LedMatrix {
	static offColor  = `rgb(0, 0, 0)`;
	/**
	 *
	 * @param {number} xCount x amount of leds
	 * @param {number} yCount y amount of leds
	 * @param {number} size	size/resolution of the leds
	 * @param {number} margin margin between leds
	 * @param {number} lineWidth line/edge width of leds
	 * @param {SVGElement} svg The svg to draw on
	 */
	constructor(xCount, yCount, size, margin, lineWidth, svg) {
		this.xCount = xCount;
		this.yCount = yCount;
		this.margin = margin;
		this.size = size;
		this.lineWidth = lineWidth;
		this.svg = svg;
		this.led = [];
		this.createMatrix();
	}

	createMatrix() {

		var stepWidth = this.size * 2 + this.margin;

		this.svg.setAttribute("width", `100%`);
		this.svg.setAttribute("viewBox", `0 0 ${stepWidth * (this.xCount + 1)} ${stepWidth * (this.yCount + 1)}`);

		for (let x = 0; x < this.xCount; x++) {
			this.led[x] = [];
			for (let y = 0; y < this.yCount; y++) {
				var led = document.createElementNS("http://www.w3.org/2000/svg", "circle");
				this.led[x][y] = led;
				led.setAttribute("cx", stepWidth*x + stepWidth);
				led.setAttribute("cy", stepWidth*y + stepWidth);
				led.setAttribute("r", this.size);
				led.setAttribute("fill", LedMatrix.offColor);
				this.svg.appendChild(led);
			}
		}
	}

	resetLeds() {
		for (let x = 0; x < this.xCount; x++) {
			for (let y = 0; y < this.yCount; y++) {
				this.setLed(x, y, LedMatrix.offColor);
			}
		}
	}

	clear() {
		var parentElement = this.svg.parentElement;
		var emptySvg = this.svg.cloneNode(false);
		parentElement.removeChild(this.svg);
		parentElement.appendChild(emptySvg);
		this.svg = emptySvg;
	}

	drawFromState(uiState) {
		let matrix = uiState.ledMatrix;
		let reset = false;
		if (this.xCount !== matrix.xCount || this.yCount !== matrix.yCount) {
			reset = true;
		}
		this.xCount = matrix.xCount;
		this.yCount = matrix.yCount;
		let ledState = matrix.ledState;

		if (reset) {
			this.clear();
			this.createMatrix();
		}

		for (let x = 0; x < this.xCount; x++) {
			for (let y = 0; y < this.yCount; y++) {
				let color = ledState[x + y * this.xCount];
				this.setLed(x, y, `rgb(${color.red}, ${color.green}, ${color.blue})`);
			}
		}
	}
	/**
	 *
	 * @param {number} x
	 * @param {number} y
	 * @param {Color} color rgb string: rgb(155, 255, 0)
	 */
	setLed(x, y, color) {
		if (x >= this.xCount || y >= this.yCount) {
			return;
		}
		this.led[x][y].setAttribute("fill", color);
	}
}

function resizeMatrix() {
	ledDiv.style.width = `${ledSlider.value}%`;
	ledDiv.style.height = `${ledSlider.value}%`;
};

var svg_element = document.createElementNS("http://www.w3.org/2000/svg", "svg");

var ledDiv = document.getElementById("led_div");
ledDiv.appendChild(svg_element);
let ledMatrix = new LedMatrix(10, 10, 1, 0.1, 0.1, svg_element);

var ledSlider = document.getElementById("led_size_slider");
ledSlider.oninput = resizeMatrix;

// Handle the message inside the webview
window.addEventListener('message', event => {

	const message = event.data; // The JSON data our extension sent

	switch (message.command) {
		case 'loadState':
			let state = message.uiState;
			ledMatrix.drawFromState(state);
			break;
		case 'setLed':
			ledMatrix.setLed(message.x, message.y, `rgb(${message.color.red}, ${message.color.green}, ${message.color.blue})`);
			break;
	}
});

