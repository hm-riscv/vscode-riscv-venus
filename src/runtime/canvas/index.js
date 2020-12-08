/*

this surpresses errors when bundling with webpack
can be removed if jsdom is no more required
(see also reference in webpack.config.js)

in detail:
- bundling jsdom tries to load jsdom's weak dependecy canvas
- if it cannot find the canvas then webpack fails
- if it finds the real canvas package it fails, because of native node modules
- with this file we fake the dependency such that it is found but no Canvas is exported (dont need canvas-support in jsdom)
*/

module.exports = {}