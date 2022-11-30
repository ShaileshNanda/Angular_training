"use strict";
var x = 40;
var y = 50;
//Triple equals do the strict comparison in JavaScript
//it means both value and type should be same to return true
console.log(x === 30);
console.log(x !== 30);
console.log(x < y);
switch (x) {
    case 1:
        console.log("Value is 1");
        break;
    case 2:
        console.log("Value is 2");
        break;
    default:
        console.log("Value not found");
}
