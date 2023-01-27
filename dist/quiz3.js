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
        super(id, "Network");
        this.admin = admin;
        this.id = id;
    }
    // Always return the same instance
    static getInstance() {
        if (ItDepartment
            .instance) {
            return this.instance;
        }
        return (this.instance = new ItDepartment("IT", ["Networking"]));
    }
}
const network = ItDepartment
    .getInstance();
console.log(network);
const computer = ItDepartment
    .getInstance();
console.log(computer);
