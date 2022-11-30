"use strict";
class Employee {
    print() {
        console.log("employee details");
    }
}
class Lead extends Employee {
    constructor(firstName, lastName, designation) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    print() {
        super.print();
        console.log(`${this.firstName} ${this.lastName} ${this.designation}`);
    }
}
class Developer extends Employee {
    constructor(firstName, lastName, designation) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    print() {
        super.print();
        console.log(`${this.firstName} ${this.lastName} - ${this.designation}`);
    }
}
let employee = new Array((new Lead("A", "B", "C"), new Developer("A", "B", "C")));
for (var emp of employee) {
    emp.print();
}
