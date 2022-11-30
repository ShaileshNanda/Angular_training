"use strict";
var n1 = 12;
console.log(n1);
var s1 = "The first string";
var s2 = "The second string";
console.log("the value of s1: " + s1);
s1 = s2;
console.log(s1 + "has been changed to: " + s2);
var b1 = true;
var b2 = false;
console.log(b1);
console.log("the type of b2 is: " + typeof b2);
//homogenenous arrays
var a1 = ["Abc", "xyz", "123"];
//these can only take one type of values
//heterogenous arrays
var a2 = [1, true, "abc", 23];
//these can hold any type
