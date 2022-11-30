class Employee {
  public firstName!: string;
  public lastName!: string;
  public designation!: string;
  public print(): void {
    console.log("employee details");
  }
}

class Lead extends Employee {
    constructor(firstName: string, lastName: string, designation: string ){
        super();
        this.firstName=firstName;
        this.lastName=lastName;
        this.designation=designation
    }
    public print(): void {
        super.print()
        console.log(`${this.firstName} ${this.lastName} ${this.designation}`);
      } 
}

class Developer extends Employee {
    constructor(firstName: string, lastName: string, designation: string ){
        super();
        this.firstName=firstName;
        this.lastName=lastName;
        this.designation=designation
    }
    public print(): void {
        super.print()
        console.log(`${this.firstName} ${this.lastName} - ${this.designation}`);
      } 
}

let employee:Employee[] = new Array((new Lead("A","B","C"),new Developer("A","B","C")))
for (var emp of employee){
    emp.print()
}