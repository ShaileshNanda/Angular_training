class TouchScreenLaptop {
    ram: number;
    hd: boolean;
    processor: string;
   
    constructor(ram:number, hd:boolean, processor:string){
    this.ram=ram
    this.hd=hd
    this.processor=processor
    }
    scroll() {
      console.log("Scroll works");
    }
    click() {
      console.log("Click works");
    }
  }
   
  class HPLaptop extends TouchScreenLaptop{
      sellRecovery:boolean;
   constructor(ram:number, hd:boolean, processor:string, sellRecovery:boolean){
   super(ram,hd,processor)
   this.sellRecovery=sellRecovery
   }
   sellRecoveryfunc(){
      this.sellRecovery=true;
  }
   scroll(): void {
      console.log("Overrinding scroll func in HP")
  }
  }
   
  class DellLaptop extends TouchScreenLaptop{
      mobileAccess:boolean;
      mobileAccessfunc(){
          this.mobileAccess=true;
      }
      constructor(ram:number, hd:boolean, processor:string, mobileAccess:boolean){
      super(ram,hd,processor)
      this.mobileAccess=mobileAccess
      }
   
      scroll(): void {
          console.log("Overrinding scroll func in Dell")
      }
  }
   
  var hp = new HPLaptop(1, false, "hplap", false)
  hp.sellRecoveryfunc
  console.log(hp.sellRecovery)
  console.log(hp.scroll)
  var dell = new DellLaptop(1, false, "hplap", false)
  dell.mobileAccessfunc
  console.log(dell.mobileAccess)
  console.log(dell.scroll)