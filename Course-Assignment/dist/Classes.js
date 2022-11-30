"use strict";
class Organizer {
    constructor(a, b) {
        this.id = a;
        this.name = b;
    }
    display() {
        console.log(this.id + this.name);
    }
}
class Eventt {
    constructor(a, b, c, d, e) {
        this.id = a;
        this.name = b;
        this.description = c;
        this.starttime = d;
        this.endtime = e;
    }
    display() {
        console.log(this.id + this.name + this.description + this.starttime + this.endtime);
    }
}
class Venue {
    constructor(a, b, c, d) {
        this.id = a;
        this.name = b;
        this.description = c;
        this.address = d;
    }
    display() {
        console.log(this.id + this.name + this.description + this.address);
    }
}
var o1 = new Organizer(1, "a");
o1.display;
var e1 = new Eventt(1, "a", "b", 1, 2);
e1.display;
var ven1 = new Venue(1, "a", "b", "c");
ven1.display;
