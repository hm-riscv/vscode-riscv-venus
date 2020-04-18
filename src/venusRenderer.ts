import simulator = require('./runtime/riscvSimulator');
import EventEmitter = require('events');

export class VenusRenderer {

	public constructor() {

		simulator.venus.venus.Renderer.setEmitter(new EventEmitter());
		var emitter: EventEmitter = simulator.venus.venus.Renderer.emitter;
		emitter.on("assembler_error", (e) => {console.log("assembler error")})
	}
}