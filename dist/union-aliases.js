"use strict";
function combineTypes(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        resultVal = input1 + input2;
        return resultVal;
    }
    else {
        resultVal = input1.toString() + input2.toString();
        return resultVal;
    }
}
const val1 = 456;
const val2 = 'Mission';
let resultVal;
const combinedVal = combineTypes(val1, val2);
console.log("the value is: " + resultVal);
const combinedValTypeAlias = typeAliasEx(val1, val2);
console.log("the type alias func value is: " + resultVal);
function typeAliasEx(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        resultVal = input1 + input2;
        return resultVal;
    }
    else {
        resultVal = input1.toString() + input2.toString();
        return resultVal;
    }
}
//typeAlias example
//from 
// function greet(user: { name: string; age: number }) {
//     console.log('Hi, I am ' + user.name);
//   }
//   function isOlder(user: { name: string; age: number }, checkAge: number) {
//     return checkAge > user.age;
//   }
//to
// type User = { name: string; age: number };
// function greet(user: User) {
//   console.log('Hi, I am ' + user.name);
// }
// function isOlder(user: User, checkAge: number) {
//   return checkAge > user.age;
// }
