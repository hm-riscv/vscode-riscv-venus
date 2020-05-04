/*
    SOURCE: venus\\src\main\frontend\scripts\helper.js
*/

var LocalStorageManager = class LocalStorageManager{
    constructor(name) {
        this.name = name;
        this.vls = {};
        this.getObj();
    }
    getObj() {
        var v = localStorage.getItem(this.name);
        if (v == null) {
            this.setup();
            return;
        }
        var jsn = JSON.parse(v);
        if (typeof jsn === 'object' && jsn[this.name] !== undefined) {
            this.vls = jsn;
        } else {
            this.setup();
        }
    }
    writeObj() {
        /*@todo handle if this obj is NOT the thing taking the storage, this will loop forever in rare cases.*/
        try {
            localStorage.setItem(this.name, JSON.stringify(this.vls));
        } catch (e) {
            console.log("Could not store the data in localStorage! Removing largest element and trying again...")
            this.removeLargest()
        }
    }
    setup() {
        this.vls[this.name] = 'false';
        this.writeObj();
    }
    get(key) {
        var v = this.vls[key];
        if (v === undefined) {
            v = 'undefined';
        }
        return v
    }
    set(key, value) {
        if (this.vls[key] === value) {
            return
        }
        this.vls[key] = value;
        this.writeObj();
    }
    remove(key) {
        delete this.vls[key];
        this.writeObj();
    }
    reset() {
        this.vls = {}
        this.setup()
    }
    removeLargest() {
        var largestKey = ""
        var ksize = 0
        var key = ""
        for (key of Object.keys(this.vls)) {
            var v = this.get(key)
            if (v.length >= ksize) {
                ksize = v.length
                largestKey = key
            }
        }
        var ktot = Object.keys(this.vls)
        if (ktot !== 0) {
            console.log("Removing largest key '" + largestKey + "' of size '" + ksize + "'")
            this.remove(largestKey)
        } else {
            console.log("Could not remove any more elements! If this was called by set, then you should clear your localStorage and try again.")
        }
    }
};

module.exports = {
	LocalStorageManager
}