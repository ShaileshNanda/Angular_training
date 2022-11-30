var s3 : string = "Hello Raghav 's' Bharath"
var Name = "Shan"
var s4 : string = `This is ${Name}` //using back tick we can use expressions inside them

console.log(s3)
console.log(s4)

//union type where we can have multiple types using a pipe '|'. It can help us hold both types
var s5 : string | number = 12
s5 = "a string"

