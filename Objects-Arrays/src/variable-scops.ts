for (var i = 0; i<5; i++){
    console.log(i)
}

var j = i;
//var is functional scope or available throughout even if used with a for loop

for (let k = 0; k<5; k++){
    console.log(k) 
}

//var l = k;//this will give us error
//let is only available with the scope

//const value can't be changes - similar to final in java

var product = function(x:number, y:number):number{
    return x + y;
}

//using const for function - its best practice to use const. So accidentaly reuse of func is avoided
// const product = function(x:number, y:number):number{
//     return x + y;
// }

product = function(m:number, n:number):number{
    return m + n;
}