"use strict";
//this is an object type and ts implicitly inferes it types.
//when we explicitly define the type as object, their values are not type infered and arent't accessible as well
//const valueObj : object = {
const valueObj = {
    name: 'Ram',
    id: 25,
    flagged: true
};
//nested objects
const valueObjCons = {
    name: 'Shan',
    id: 21,
    skills: ['java', 'golang'],
    teamMem: {
        id: 12,
        size: 33
    }
};
let tupleTestVal = [12, 'silent']; //in this case it refers that the value of this string array has to be either number or string
//tupleTestVal = ['abc', 12, true]
let tupleVal; //using tuple we set the length and also the type of value that can be added at each position
tupleVal = [12, 'abc'];
//tupleVal.push['xyz'] //tuple can not restrict incorrect value type during 'push'
//playing around with string array 
for (const jobOpp of valueObjCons.skills) {
    console.log(jobOpp.toUpperCase()); //typescript inferes that the type is an string
    //console.log(jobOpp.map())  //Error 
}
console.log(valueObj.flagged);
console.log(valueObjCons.teamMem.size);
//enum (a custom type)
var Role;
(function (Role) {
    Role[Role["Admin"] = 12] = "Admin";
    Role[Role["User"] = 13] = "User";
    Role[Role["Access"] = 14] = "Access";
})(Role || (Role = {}));
;
console.log(Role.Admin);
