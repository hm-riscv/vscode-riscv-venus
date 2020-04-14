import {JSDOM} from "jsdom";
const html = require("./fake.index.html")

const fakeDOM = new JSDOM(`<!DOCTYPE html>`);
const window = fakeDOM.window
const document = window.document
document.body.innerHTML = html

export {
	fakeDOM,
	window,
	document
}