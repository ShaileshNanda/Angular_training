class Training {
    count:number;
    course: string;
    flag: boolean

    constructor(cnt: number, crs: string, fg: boolean){
    this.count = cnt
    this.course = crs
    this.flag = fg
    }

    display():void{
        console.log (this.count)
        console.log (this.course)
        console.log (this.flag)
    }
}

//use new keyword to create an object for class
var empTraining = new Training(12, "java", true); 
console.log(empTraining.count + empTraining.course + empTraining.flag);

for(let item in Training){
    console.log(empTraining)
}