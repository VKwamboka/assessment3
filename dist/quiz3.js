"use strict";
// BASE CLASS
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employee = [];
        this.name = name;
    }
    describe() {
        console.log(`  DEPARTMENT: ${this.name} ID: ${this.id}     `);
    }
}
// CHILD CLASS:
class ItDepartment extends Department {
    // private constructor
    constructor(id, admin) {
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
        return (this.instance = new ItDepartment("d25", ["Max"]));
    }
} // So here only once instance is used - despite calling multiple times
const account = ItDepartment
    .getInstance();
console.log(account);
const account2 = ItDepartment
    .getInstance();
console.log(account2);
