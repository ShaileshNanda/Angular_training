class BMW{
    make:string;
    model:string
    year:string
    //create constructor to intialise
    constructor(make:string, model:string, year:string){
        this.make=make
        this.model=model
        this.year=year
    }
    commonenginefunc(){
        console.log("common function")
    }

    start(){
        console.log("Start")
    }

    stop(){
        console.log("Stop")
    }
}

class Threeseries extends BMW{
cruisecontrolenabled:boolean;
cruisecontrolenabledFunc(){
    this.cruisecontrolenabled = true;
}
constructor (make:string, model:string, year:string, cruisecontrolenabled: boolean){
    super(make, model, year)
    this.cruisecontrolenabled=cruisecontrolenabled
}
//overriding the properties of parent class
start(){
    console.log("Button Start")
}

stop(){
    console.log("Button Stop")
}
}

class Fiveseries extends BMW{
parkassistenabled:boolean;

 parkassistenabledFunc(){
    this.parkassistenabled = true;
}
constructor (make:string, model:string, year:string, parkassistenabled: boolean){
    super(make, model, year)
    this.parkassistenabled=parkassistenabled
}
}

var threeseries = new Threeseries("bmw","123","234", false)
console.log(threeseries.cruisecontrolenabled)
console.log(threeseries.make)
console.log(threeseries.model)
console.log(threeseries.year)
threeseries.cruisecontrolenabledFunc
console.log(threeseries.cruisecontrolenabled)

var fiveseries = new Fiveseries("bmw","123","234", false)
console.log(fiveseries.parkassistenabled)
console.log(fiveseries.make)
console.log(fiveseries.model)
console.log(fiveseries.year)
fiveseries.parkassistenabledFunc
console.log(fiveseries.parkassistenabled)