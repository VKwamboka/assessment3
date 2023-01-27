// BASE CLASS
class Department {
    protected employee: string[] = [];
    constructor(public name: string, protected id: string) {
      this.name = name;
    }
    describe() {
      console.log(`  DEPARTMENT: ${this.name} ID: ${this.id}     `);
    }
  } 
  
  // CHILD CLASS:
  class ItDepartment
   extends Department {
    admin: string[];
         // initialize a static variable  // Cannot be accessed from outside the class

    private static instance: ItDepartment;


    // private constructor
    private constructor(id: string, admin: string[]) {
      super(id, "Account");
      this.admin = admin;
      this.id = id;
    } 
    // Always return the same instance
    static getInstance() {
      if (ItDepartment
        .instance) {
        // i.e. classname.variable
        return this.instance;
      }
      return (this.instance = new ItDepartment
        ("d25", ["Max"]));
    }
  } // So here only once instance is used - despite calling multiple times
  const account = ItDepartment
  .getInstance();
  console.log(account);
  const account2 = ItDepartment
  .getInstance();
  console.log(account2);
  