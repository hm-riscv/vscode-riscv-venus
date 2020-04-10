const kotlin = require("./venus/kotlin")

if (typeof kotlin !== "undefined" && typeof kotlin.kotlin !== "undefined" && typeof kotlin.kotlin.Number === "undefined") {
	kotlin.kotlin.Number = function (){}
	kotlin.kotlin.Number.prototype.call = function(a){}
}

const venus = require("./venus/venus")(kotlin)

const venus_main = venus;
// TODO cant use Driver rn, because it communicates with browser DOM, which we dont have
// may have to overwrite Driver with own implementation
// const driver = venus_main.venus.Driver;
venus.api = venus_main.venus.api.API;
const simulatorAPI = venus_main.venus.api.venusbackend.simulator.Simulator;
/*
// TODO what are we using this for? (copy&paste from main.js)
editor = document.getElementById("asm-editor");
codeMirror = CodeMirror.fromTextArea(editor,
	{
		lineNumbers: true,
		mode: "riscv",
		indentUnit: 4,
		autofocus: true,
		lint: true
	}
);
codeMirror.setSize("100%", "88vh");
codeMirror.refresh()
*/
module.exports = {
	venus_main,
	// driver,
	venus,
	simulatorAPI
}

