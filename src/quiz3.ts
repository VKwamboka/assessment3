class Department  {
    name: string;
    id: string
           

    private static instance: Department;


    // private constructor
    private constructor(id: string, name: string) {
    
      this.name = name;
      this.id = id;
    } 
    
    static getInstance() {
      if (Department
        .instance) {
       
        return this.instance;
      }
      return (this.instance = new Department
        ("IT", "Networking"));
    }
  } 
  const network = Department
  .getInstance();
  console.log(network);
  const computer = Department
  .getInstance();
  console.log(computer);
  