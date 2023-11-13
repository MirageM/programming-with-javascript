// Task 1: Code a Person class
class Person{
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy = this.energy + 10;
    }
    doSomethingFun() {
        this.energy = this.energy - 10;
    }
}

// Task 2: Code a Worker class
class Worker extends Person{
    constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp = this.xp + 10;
    }
    sleep() {
        super.sleep;
    }
    doSomethingFun() {
        super.doSomethingFun;
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    let person = new Worker();
    person.name = "Bob";
    person.age = 21;
    person.energy = 110;
    person.xp = 0;
    person.hourlyWage = 10;
    person.goToWork();
    return person;
}

// Task 4: Code a manager object, methods
function manager() {
    let manager1 = new Worker();
    manager1.name = "Alice";
    manager1.age = 30;
    manager1.energy = 120;
    manager1.xp = 100;
    manager1.hourlyWage = 30;
    manager1.doSomethingFun();
    return manager1;
}

console.log(intern());
console.log(manager());