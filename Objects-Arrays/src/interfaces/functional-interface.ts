interface Add{
    (n1:number, n2:number): number
}

interface Sub{
    (n3:string, n4:string): void
}

var add : Add;
add = function addition(x,y):number{ //number or any specific type cant be overridden
return x+y
}

var sub : Sub;
sub = function subtraction(m,n): string{ //void can be overrriden to other types
    var st = m.concat(n)
    return st
}

console.log(add(23,4))
console.log(sub("Jan","Feb"))