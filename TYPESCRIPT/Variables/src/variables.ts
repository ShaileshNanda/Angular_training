var n1 : number = 12
console.log(n1);

var s1 : string = "The first string"
var s2 : string = "The second string"
console.log("the value of s1: " + s1)
s1 = s2
console.log(s1 + "has been changed to: " + s2)

var b1 : boolean = true;
var b2 = false;
console.log(b1)
console.log("the type of b2 is: " + typeof b2)

//homogenenous arrays
var a1 : Array<string> = ["Abc", "xyz", "123"]
//these can only take one type of values

//heterogenous arrays
var a2 : Array<any> = [1,true, "abc", 23]
//these can hold any type
