"use strict";
class Department {
    // private constructor
    constructor(id, name) {
        this.name = name;
        this.id = id;
    }
    static getInstance() {
        if (Department
            .instance) {
            return this.instance;
        }
        return (this.instance = new Department("IT", "Networking"));
    }
}
const network = Department
    .getInstance();
console.log(network);
const computer = Department
    .getInstance();
console.log(computer);
