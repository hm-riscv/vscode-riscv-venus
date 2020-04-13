const kotlin = require("kotlin")

if (typeof kotlin !== "undefined" && typeof kotlin.kotlin !== "undefined" && typeof kotlin.kotlin.Number === "undefined") {
	kotlin.kotlin.Number = function (){}
	kotlin.kotlin.Number.prototype.call = function(a){}
}

const {LocalStorageManager} = require('./helpers')
const {JSDOM} = require("jsdom");
const fakeDOM = new JSDOM(`<!DOCTYPE html>`);
const html = require("./fake.index.html")
const document = fakeDOM.window.document
document.body.innerHTML = html
const {HTMLButtonElement, HTMLInputElement, HTMLSelectElement, HTMLElement, HTMLTextAreaElement} = fakeDOM.window
const htmlClasses = [HTMLButtonElement, HTMLInputElement, HTMLSelectElement, HTMLElement, HTMLTextAreaElement]
htmlClasses.forEach(htmlClass => {
	global[htmlClass.name] = htmlClass
});

global["document"] = document
global["load_update_message"] = (msg) => console.log(msg)
global["window"] = fakeDOM.window
global["LocalStorageManager"] = LocalStorageManager
if (typeof localStorage === "undefined" || localStorage === null) {
	const LocalStorage = require('node-localstorage').LocalStorage;
	global["localStorage"] = new LocalStorage('./scratch');
}

const venus = require("./venus/venus")

const venus_main = venus;
const driver = venus_main.venus.Driver;
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
export = {
	venus_main,
	driver,
	venus,
	simulatorAPI
}

