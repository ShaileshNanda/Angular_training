"use strict";
var Employee = {
    id: 16,
    empName: "Shan",
    salary: 2000,
};
for (var details in Employee) {
    console.log(details);
}
var { id, empName, salary } = Employee;
console.log(id);
console.log(empName);
console.log(salary);
