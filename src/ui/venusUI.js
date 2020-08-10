var canvas = document.createElement("canvas");
document.body.appendChild(canvas)

drawLEDMatrix(10, 10, 50, 2, 5);

function drawLEDMatrix(xCount, yCount, size, margin, lineWidth) {
	var margin = margin + lineWidth;

	var stepWidth = size + margin;

	var context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);
	canvas.width = xCount * stepWidth + size;
	canvas.height = yCount * stepWidth + size;

	var radius = size / 2;

	for (x = 0; x < xCount; x++) {
		for (y = 0; y < yCount; y++) {
			context.beginPath();
			context.arc((x*stepWidth) + size, (y*stepWidth) + size, radius, 0, 2 * Math.PI, false);
			context.fillStyle = 'black';
			context.fill();
			context.lineWidth = 5;
			context.strokeStyle = '#222222';
			context.stroke();
		}
	}
}