"use strict";
class Organizer2 {
    constructor(a, b) {
        this._id = a;
        this.name = b;
    }
    display() {
        console.log(this._id + this.name);
    }
    get getId() {
        return this._id;
    }
    set setId(id) {
        this._id = id;
    }
}
class Eventt2 {
    constructor(a, b, c, d, e) {
        this._id = a;
        this.name = b;
        this.description = c;
        this.starttime = d;
        this.endtime = e;
    }
    display() {
        console.log(this._id + this.name + this.description + this.starttime + this.endtime);
    }
    get getId() {
        return this._id;
    }
    set setId(id) {
        this._id = id;
    }
}
class Venue2 {
    constructor(a, b, c, d) {
        this._id = a;
        this.name = b;
        this.description = c;
        this.address = d;
    }
    display() {
        console.log(this._id + this.name + this.description + this.address);
    }
    get getId() {
        return this._id;
    }
    set setId(id) {
        this._id = id;
    }
}
var o1 = new Organizer(1, "a");
o1.display;
var e1 = new Eventt(1, "a", "b", 1, 2);
e1.display;
var ven1 = new Venue(1, "a", "b", "c");
ven1.display;
