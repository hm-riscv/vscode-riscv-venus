class LedMatrix {
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

		var radius = this.size / 2;

		for (let x = 0; x < this.xCount; x++) {
			for (let y = 0; y < this.yCount; y++) {
				context.beginPath();
				context.arc((x*stepWidth) + this.size, (y*stepWidth) + this.size, radius, 0, 2 * Math.PI, false);
				context.fillStyle = 'black';
				context.fill();
				context.lineWidth = 5;
				context.strokeStyle = '#222222';
				context.stroke();
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

		var radius = this.size / 2;

		for (let x = 0; x < this.xCount; x++) {
			for (let y = 0; y < this.yCount; y++) {
				context.beginPath();
				context.arc((x*stepWidth) + this.size, (y*stepWidth) + this.size, radius, 0, 2 * Math.PI, false);
				let color = ledState[x + y * this.xCount]
				context.fillStyle = `rgb(${color.red}, ${color.green}, ${color.blue})`;
				context.fill();
				context.lineWidth = 5;
				context.strokeStyle = '#222222';
				context.stroke();
			}
		}
	}

	setLed(x, y, color) {
		if (x >= this.xCount || y >= this.yCount) {
			return
		}
		var margin = this.margin + this.lineWidth;
		var stepWidth = this.size + margin;
		var context = this.canvas.getContext("2d");
		var radius = this.size / 2;

		context.beginPath();
		context.arc((x*stepWidth) + this.size, (y*stepWidth) + this.size, radius, 0, 2 * Math.PI, false);
		context.fillStyle = `rgb(${color.red}, ${color.green}, ${color.blue})`;
		context.fill();
		context.lineWidth = 5;
		context.strokeStyle = '#222222';
		context.stroke();

	}
}

var canvas = document.createElement("canvas");
document.body.appendChild(canvas)

let ledMatrix = new LedMatrix(10, 10, 50, 2, 5, canvas)
ledMatrix.drawEmpty()

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

