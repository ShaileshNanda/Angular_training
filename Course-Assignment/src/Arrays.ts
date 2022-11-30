var vaccines = ["J&J", "Sputnik", "Pfizer"]
vaccines.push("Covaxin")
for (var i=vaccines.length; i>0;i--){
console.log("Logging:" + vaccines[i])
}
 
var [v1, v2, v3, v4] = vaccines
console.log(v1)
console.log(v2)
console.log(v3)
console.log(v4)