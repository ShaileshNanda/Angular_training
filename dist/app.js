"use strict";
let userInput; //unknown is similar to any but here the type is always unknown and there would be type restrictions
let userName;
let userId;
userInput = "sam";
//userName = userInput  //assigning unknown type (with a string value) to a string value is not possible because it doesn't know its type.
userName = userId;
//to fix/workaround
if (typeof userInput === "string") {
    userName = userInput;
}
//never - never returns anything
function addNumber(n1, n2) {
    throw { message: n1, errorCode: n2 };
    //similar to infinite while loop
}
//refer below link for documentation
//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
