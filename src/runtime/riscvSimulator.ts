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

global["LocalStorageManager"] = LocalStorageManager
if (typeof localStorage === "undefined" || localStorage === null) {
	const LocalStorage = require('node-localstorage').LocalStorage;
	global["localStorage"] = new LocalStorage('./scratch');
}
const load_update_message = (msg) => console.log(msg)
const load_done = function () {
    load_update_message("Done!");
    window.document.body.classList.add("loaded");
    window.onerror = null;
};
global["document"] = document
global["load_update_message"] = load_update_message
global["load_done"] = load_done
global["window"] = fakeDOM.window
window["driver_load_done"] = function () {
    /* Check if packages are all loaded */
    const h  = function(){
        if (driver.driver_complete_loading) {
            load_done();
            return
        }
        setTimeout(h, 10);
    };
    setTimeout(h, 10);
};
global["codeMirror"] = {
	refresh: () => {},
	setValue: (txt) => {},
	save: () => {},
}

const venus = require("./venus/venus")

const venus_main = venus;
const driver = venus_main.venus.Driver;
venus.api = venus_main.venus.api.API;
const simulatorAPI = venus_main.venus.api.venusbackend.simulator.Simulator;

Object.assign(global, {
	driver
})

export = {
	venus_main,
	driver,
	venus,
	simulatorAPI
}

