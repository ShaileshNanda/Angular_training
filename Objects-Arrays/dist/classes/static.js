"use strict";
class AccessEx4 {
    constructor() {
        this.owners = 55; //accessed by creating an obj for the class, as this is non-static
    }
    static student(id, name, attendance) {
        console.log("the student details are below: ");
        console.log(id);
        console.log(name);
        console.log(Boolean);
    }
    teacher(id, name, attendance) {
        console.log("the teacher details are below: ");
        console.log(id);
        console.log(name);
        console.log(Boolean);
    }
}
AccessEx4.brand = "BMW"; //memory is allocated only once and accessed using class name, not object
console.log(AccessEx4.brand);
AccessEx4.student;
var accessObj = new AccessEx4;
console.log(accessObj.owners);
accessObj.teacher;
