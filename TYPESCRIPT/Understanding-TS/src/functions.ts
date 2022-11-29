//typescript infers the type of this function implicitly as number, since it has number as parama nd also returns something.
function add(num1: number, num2: number){
const res = num1 + num2;
return res
}

//typescript infers the type of this function implicitly as void, since it does not returns anything.
function add1(num1: number, num2: number){
    const res = num1 + num2;
    console.log(res)
}

//we explicitly define the type as void as this func does not have to return something
function add2(num1: number, num2: number) : void{
    const res = num1 + num2;
    console.log(res)
}

//we explicitly define the type as undefined, we need to have a return but the type of return value is itself undefined
function add3(num1: number, num2: number) : undefined{
    const res = num1 + num2;
    console.log(res)
    return 
}

//function types

let value = add   
console.log(value(1,2))
//value = 2 typescript doesn't know if add is an function

let value2 : Function; //typescript knows it is an function but we might call incorrect type value to another function

let value3 : (val1:number, val2:number) => number  //we define what type to pass and whats the return type
value3 = add

console.log("type func: "+value3(23,34))

//callback function
function add4(num1: number, num2: number, cb:(num: number)=> void){
    const res = num1 + num2;
    cb(res)
}

const cbFuncCall = add4(23,56, ()=>{
    console.log(cbFuncCall)
})
