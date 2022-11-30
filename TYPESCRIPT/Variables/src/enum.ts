//used to declare constant values. These can be reused. And an index number is always assigned implicitly
//represents a collection of constants
enum Employee {
    Id,
    Name
}

console.log(Employee.Id)
console.log(Employee.Name)

console.log(Employee[0])
console.log(Employee[1])

//the index values can also be assigned to enums as below
enum Attendance{
    Saturday=4,
    Sunday=5
}

console.log(Attendance.Saturday)
console.log(Attendance[5])