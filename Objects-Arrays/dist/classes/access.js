"use strict";
class AccessEx {
    constructor() {
        this.num = 12; //by default these are public accessilble all over the class
    }
}
var numobj = new AccessEx;
numobj.num = 2;
class AccessEx2 {
    constructor() {
        this.num2 = 34; //by adding readonly, it accessible all over but not editable
    }
}
var numobj2 = new AccessEx2;
//numobj2.num2 = 2; //cannot reasign because its an read only property
//private properties
class AccessEx3 {
    constructor() {
        this._num3 = 77; //private props are not accessible outside class even with objects, we need to have getter and setters
    }
    display() {
        console.log("the private value is: " + this._num3);
    }
    get getNum() {
        return this._num3;
    }
    set setNum(_num3) {
        this._num3 = _num3;
    }
}
var numObj3 = new AccessEx3;
console.log(numObj3.getNum);
