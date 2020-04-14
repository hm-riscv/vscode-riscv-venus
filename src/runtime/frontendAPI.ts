/**
 * API for frontend/debugger
 * 	-	atm this communicates with the DOM
 * 		rn DOM functions as a layer of persistance where data gets exchanged between former venus-frontend and simulator
 * 		e.g. most of the values int the settings view (VENUS-UI => Venus Tab => Settings)
 * 	-	//TODO in the future DOM gets substituted to get rid of fakeDOM
 */

const {document} = require("./fakeDOM")

function setText(txt: string) {
	const editor = document.getElementById("asm-editor") as HTMLTextAreaElement
	editor.value = txt
}

function setMaxSteps(steps: number) {
	const form = document.getElementById("tmaxsteps-val") as HTMLInputElement
	form.value = steps.toString()
}

export {
	setText,
	setMaxSteps
}