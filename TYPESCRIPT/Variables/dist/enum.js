"use strict";
//used to declare constant values. These can be reused. And an index number is always assigned implicitly
//represents a collection of constants
var Employee;
(function (Employee) {
    Employee[Employee["Id"] = 0] = "Id";
    Employee[Employee["Name"] = 1] = "Name";
})(Employee || (Employee = {}));
console.log(Employee.Id);
console.log(Employee.Name);
console.log(Employee[0]);
console.log(Employee[1]);
//the index values can also be assigned to enums as below
var Attendance;
(function (Attendance) {
    Attendance[Attendance["Saturday"] = 4] = "Saturday";
    Attendance[Attendance["Sunday"] = 5] = "Sunday";
})(Attendance || (Attendance = {}));
console.log(Attendance.Saturday);
console.log(Attendance[5]);
