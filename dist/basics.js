"use strict";
//during compilation of ts to js - we get warning if there are any type mismatch. 
//But this doesn't terminate the compilation prpcess
function addNum(n1, n2, showValue, finalValue) {
    //below is how we check in javascript (this might wanrs us during run time)
    //if (typeof n1 === 'number' || typeof n2 === 'number'){
    //throw new Error("Incorrect input")
    //}
    if (printValue === true) {
        console.log(finalValue + n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
const number1 = 12;
let number2 = 2;
const printValue = true;
const resValue = "Result is: ";
const val = addNum(number1, number2, printValue, resValue);
