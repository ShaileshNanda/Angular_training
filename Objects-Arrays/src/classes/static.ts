class AccessEx4{
    static brand: string = "BMW" //memory is allocated only once and accessed using class name, not object
    owners: number = 55 //accessed by creating an obj for the class, as this is non-static
    
    static student(id:number, name:string, attendance: boolean){
    console.log("the student details are below: ")
    console.log(id)
    console.log(name)
    console.log(Boolean)
    }

    teacher(id:number, name:string, attendance: boolean){
        console.log("the teacher details are below: ")
        console.log(id)
        console.log(name)
        console.log(Boolean)
    }
}

console.log(AccessEx4.brand)
AccessEx4.student

var accessObj = new AccessEx4;
console.log(accessObj.owners)
accessObj.teacher