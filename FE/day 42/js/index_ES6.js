/**
 * 
 */

class Restaurant {
    constructor(options) {
        this.capital = options.capital;
        this.seats = options.seats;
        this.staff = options.staff;
    }
    hire(staff) {
        this.staff.push(staff)
    }
    fire(staff) {
        this.staff = this.staff.filter(item => item != staff)
    }
}

/**
 * 
 */
let id = 0
class Staff {
    constructor(name, salary) {
        this.id = id++;
        this.name = name;
        this.salary = salary;
    }
    work() {
        //do something
    }
}

/**
 * 
 */

class Waiter extends Staff {
    constructor(name, salary) {
        super(name, salary);
    }
    work(arg) {
        if (Array.isArray(arg)) {
            //take order
        } else {
            //
        }
    }
}

/**
 * 
 */
class Cook extends Staff {
    constructor(name, salary) {
        super(name, salary)
    }
    work() {
        return
    }
}

/**
 * 
 */

class Client {
    orderSth() {

    }
    eat() {

    }
}

/**
 * 
 */
class Dish {
    constructor(options) {
        this.name = options.name;
        this.cost = options.cost;
        this.price = options.price;
    }
}