"use strict";
function users(id, fname, role) {
    console.log("id" + id);
    console.log("fname" + fname);
    console.log("role" + role);
}
console.log(users(1, "Sam", "admin"));
//having optional parameters
function users1(id, fname, role) {
    console.log("id" + id);
    console.log("fname" + fname);
    console.log("role" + role);
}
console.log(users1(1, "Sam"));
//having default value in parameters
function users3(id, fname, role = "Ram") {
    console.log("id" + id);
    console.log("fname" + fname);
    console.log("role" + role);
}
console.log(users1(1, "Sam", "Jam"));
//passsing a function as parameter
function user4(fun) {
    console.log(fun(3, "jan"));
}
user4(users3);
//overloading - same method name but different param type to restrict the type of accepted param when the function is reused
// function overLoading1(num:number)
// function overLoading1(num:string)
// function overLoading1(x: any){
// console.log(x)
// }
// overLoading1(12)
// overLoading1("feb")
//overLoading1(true) - would give an error, because the param has to be string or number
//rest param - we can pass any number of args using ...
function restParamEx(x, ...nums) {
    console.log(nums);
}
restParamEx(true, 2, 2, 3, 4, 34, 34, 23, 2);
var mMarks = parseInt(prompt("Marks in Maths"));
var cMarks = parseInt(prompt("Marks in chemistry"));
var pMarks = parseInt(prompt("Marks in physics"));
function findAvg(x, y, z) {
    var avg = (x + y + z) / 3;
    findGrade(avg);
    function findGrade(mark) {
        if (mark >= 90) {
            console.log("A grade");
        }
        else if (mark >= 60) {
            console.log("B grade");
        }
        else if (mark < 60) {
            console.log("c grade");
        }
    }
}
findAvg(mMarks, cMarks, pMarks);
