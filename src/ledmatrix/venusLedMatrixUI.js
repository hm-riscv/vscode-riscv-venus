class LedMatrix {

	/**
	 *
	 * @param {number} xCount x amount of leds
	 * @param {number} yCount y amount of leds
	 * @param {number} size	size/resolution of the leds
	 * @param {number} margin margin between leds
	 * @param {number} lineWidth line/edge width of leds
	 * @param {canvas} canvas The html cnavas to draw on
	 */
	constructor(xCount, yCount, size, margin, lineWidth, canvas) {
		this.xCount = xCount;
		this.yCount = yCount;
		this.size = size;
		this.margin = margin;
		this.lineWidth = lineWidth;
		this.canvas = canvas;
	}

	drawEmpty() {
		var margin = this.margin + this.lineWidth;

		var stepWidth = this.size + margin;

		var context = this.canvas.getContext("2d");
		context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.canvas.width = this.xCount * stepWidth + this.size;
		this.canvas.height = this.yCount * stepWidth + this.size;

		for (let x = 0; x < this.xCount; x++) {
			for (let y = 0; y < this.yCount; y++) {
				this.drawLed(x, y, `rgb(0, 0, 0)`, stepWidth, context)
			}
		}
	}

	drawFromState(uiState) {
		let matrix = uiState.ledMatrix
		this.xCount = matrix.xCount
		this.yCount = matrix.yCount
		let ledState = matrix.ledState

		var margin = this.margin + this.lineWidth;

		var stepWidth = this.size + margin;

		var context = this.canvas.getContext("2d");
		context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.canvas.width = this.xCount * stepWidth + this.size;
		this.canvas.height = this.yCount * stepWidth + this.size;

		for (let x = 0; x < this.xCount; x++) {
			for (let y = 0; y < this.yCount; y++) {
				let color = ledState[x + y * this.xCount]
				this.drawLed(x, y, `rgb(${color.red}, ${color.green}, ${color.blue})`, stepWidth, context)
			}
		}
	}
	/**
	 *
	 * @param {number} x
	 * @param {number} y
	 * @param {Color} color color class from led state
	 */
	setLed(x, y, color) {
		if (x >= this.xCount || y >= this.yCount) {
			return
		}
		var margin = this.margin + this.lineWidth;
		var stepWidth = this.size + margin;
		var context = this.canvas.getContext("2d");


		this.drawLed(x, y, `rgb(${color.red}, ${color.green}, ${color.blue})`, stepWidth, context);
	}

	/**
	 *
	 * @param {number} x
	 * @param {number} y
	 * @param {number} color
	 * @param {number} stepWidth
	 * @param {CanvasRenderingContext2D} context
	 */
	drawLed(x, y, color, stepWidth, context) {
		var radius = this.size / 2;

		context.beginPath();
		context.arc((x*stepWidth) + this.size, (y*stepWidth) + this.size, radius, 0, 2 * Math.PI, false);
		context.fillStyle = color;
		context.fill();
		context.lineWidth = 5;
		context.strokeStyle = '#222222';
		context.stroke();
	}
}

function resizeMatrix() {
	canvas.style.width = `${ledSlider.value}%`
	canvas.style.height = `${ledSlider.value}%`
};

var canvas = document.createElement("canvas");

var ledDiv = document.getElementById("led_div")
ledDiv.appendChild(canvas)
var ledSlider = document.getElementById("ledsize")
let ledMatrix = new LedMatrix(10, 10, 50, 2, 5, canvas)
ledMatrix.drawEmpty()
resizeMatrix()
ledSlider.oninput = resizeMatrix

// Handle the message inside the webview
window.addEventListener('message', event => {

	const message = event.data; // The JSON data our extension sent

	switch (message.command) {
		case 'loadState':
			let state = message.uiState;
			ledMatrix.drawFromState(state);
			break;
		case 'setLed':
			ledMatrix.setLed(message.x, message.y, message.color);
			break;
	}
});

