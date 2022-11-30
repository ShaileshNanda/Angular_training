class Organizer2 {
    private _id:number;
    name:string

    constructor(a:number, b:string){
    this._id = a
    this.name=b
    }

    display(){
        console.log(this._id + this.name)
    }
    get getId(){
        return this._id 
    }
    set setId(id:number){
        this._id=id
    }
}

class Eventt2 {
   private _id:number;
    name:string
    description:string
    starttime:number
    endtime:number

    constructor(a:number, b:string, c:string, d:number, e:number){
        this._id = a
        this.name=b
        this.description=c
        this.starttime=d
        this.endtime=e
        }

    display(){
        console.log(this._id + this.name + this.description +  this.starttime + this.endtime)
    }
    get getId(){
        return this._id 
    }
    set setId(id:number){
        this._id=id
    }
}

class Venue2 {
    private _id:number;
    name:string
    description:string
    address:string

    constructor(a:number, b:string, c:string, d:string){
        this._id = a
        this.name=b
        this.description=c
        this.address=d
        }

        display(){
            console.log(this._id + this.name + this.description +  this.address)
        }
        get getId(){
            return this._id 
        }
        set setId(id:number){
            this._id=id
        }
}


var o1 = new Organizer(1, "a")
o1.display;

var e1 = new Eventt(1, "a", "b", 1,2)
e1.display;

var ven1 = new Venue(1, "a", "b", "c")
ven1.display;
