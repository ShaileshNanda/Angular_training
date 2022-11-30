//interface - basically used to define set of rules
//interface are only for typescript and not javascript
interface Product{
    id: number,
    name: string,
    description: string,
    price: number
}

var product1:Product={
id: 1,
name: "juke",
description: "xyz",
price: 45
}

//optional interface
//methods can also be added to interface - they need to be defined in obj consuming the interface
interface Product2{
    id: number,
    name: string,
    description: string,
    price?: number //using ? this becomes an optional property
    display():void
}

var product2:Product2={
id: 1,
name: "juke",
description: "xyz",
display():void{
    console.log("test")
}
}
