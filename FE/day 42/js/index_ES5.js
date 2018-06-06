/**
 * @param {*} options 
 * @param {Number} options.capital
 * @param {Number} options.seats
 * @param {Array} options.staffList
 */
function Restaurant(options) {
    this.capital = options.capital;
    this.seats = options.seats;
    this.staff = options.staff;
}
Restaurant.prototype.hire = function (newStaff) {
    this.staff.push(newStaff);
}
Restaurant.prototype.fire = function (staff) { 
    let index = this.staff.indexOf(staff);
    this.staff.splice(index,1);
    console.log('sorry!')
}


/**
 * 
 * @param {*} options 
 */
let id = 0

function Staff(name,salary) {
    this.id = id++;
    this.name = name;
    this.salary = salary;
}
Staff.prototype.work = function () {

}


/**
 * 
 * @param {*} options 
 */
function Waiter(options) {
    Staff.call(this);
}
Waiter.prototype.work = function (options) {
    if (Object.prototype.toString.call(options) === '[object Array]') {
        //take order
    } else {
        //
    }
}

/**
 * 
 */
function Cook() {
    Staff.call(this);
}
Cook.prototype.make = function () {

    return
}

/**
 * 
 */
function Client() {

}
Client.prototype = {
    constructor: Client,
    orderSth() {

    },
    eat() {

    }
}

/**
 * @param {*} options 
 */
function Dish(options) {
    this.name = options.name;
    this.cost = options.cost;
    this.price = options.price;
}