"use strict";
class TouchScreenLaptop {
    constructor(ram, hd, processor) {
        this.ram = ram;
        this.hd = hd;
        this.processor = processor;
    }
    scroll() {
        console.log("Scroll works");
    }
    click() {
        console.log("Click works");
    }
}
class HPLaptop extends TouchScreenLaptop {
    constructor(ram, hd, processor, sellRecovery) {
        super(ram, hd, processor);
        this.sellRecovery = sellRecovery;
    }
    sellRecoveryfunc() {
        this.sellRecovery = true;
    }
    scroll() {
        console.log("Overrinding scroll func in HP");
    }
}
class DellLaptop extends TouchScreenLaptop {
    mobileAccessfunc() {
        this.mobileAccess = true;
    }
    constructor(ram, hd, processor, mobileAccess) {
        super(ram, hd, processor);
        this.mobileAccess = mobileAccess;
    }
    scroll() {
        console.log("Overrinding scroll func in Dell");
    }
}
var hp = new HPLaptop(1, false, "hplap", false);
hp.sellRecoveryfunc;
console.log(hp.sellRecovery);
console.log(hp.scroll);
var dell = new DellLaptop(1, false, "hplap", false);
dell.mobileAccessfunc;
console.log(dell.mobileAccess);
console.log(dell.scroll);
