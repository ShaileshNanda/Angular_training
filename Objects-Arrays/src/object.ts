var Ram = {
    id: 21,
    exp: 3,
    role: "Dev"
}

console.log(Ram.id);

for (var data in Ram){
    console.log("The data: " + data)
}

//array de-structuring - assigning array values to individual elements.
var student = ["Ramesh", "Sai", "Jahid"];
var [firstStu, secondStu, thirdStu] = student //de-structuring
for (var i=0; student.length>=i; i++){
console.log(firstStu)
console.log(secondStu)
console.log(thirdStu)
}

var vaccines = ["J&J", "Sputnik", "Pfizer"]
vaccines.push("Conaxin")
for (var i=vaccines.length; i>0;i--){
console.log("LOgging:" + vaccines[i])
}

var [v1, v2, v3, v4] = vaccines
console.log(v1)
console.log(v2)
console.log(v3)
console.log(v4)