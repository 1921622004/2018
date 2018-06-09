/**
 * 
 */

class Restaurant {
    constructor(options) {
        this.capital = options.capital;
        this.seats = options.seats;
        this.staff = options.staff;
        this.customer = [];
    }
    hire(staff) {
        this.staff.push(staff)
    }
    fire(staff) {
        this.staff = this.staff.filter(item => item != staff)
    }
    welcome(customer) {
        console.log(`欢迎光临`)
        this.customer.push(customer);  
    }
    leave(customer){
        this.customer = this.customer.filter(item => item!= customer)
        console.log('欢迎下次光临')
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
        this.order = {}
    }
    work(cook, arg) {
        if (Array.isArray(arg)) {
            //take order
            console.log(`新客人点了${arg[0].name}`);
            
            return cook.work.call(this,arg)
        } else {
            let arg = cook;
            console.log(`给客人上菜`)
            return arg.name.eat(arg)
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
    work(arg) {
        return new Promise((resolve,reject) => {
            let time = Math.random() * 2000 + 3000;
            setTimeout(()=>{
                console.log(`做菜用时${Math.round(time/1000)}秒`)
                resolve(arg)
            },time)
        })
    }
}

/**
 * 
 */

let method = ['蒸', '煮', '炸', '炒', '焖'],
    food = ['鸡', '鸭', '鱼', '肉'];

class Client {
    orderSth() {
        let ary = [];
        ary.push(new Dish);
        ary.name = this;
        return ary
    }
    eat(dish) {
        return new Promise((resolve,reject) => {
            let time = Math.random() * 2000 + 3000;
            setTimeout(()=>{
                console.log(`吃完了`)
                resolve()
            },time)
        })
    }
}

/**
 * 
 */
class Dish {
    constructor(options) {
        this.name = method[Math.floor(Math.random() * 5)] + food[Math.floor(Math.random() * 4)];
        this.cost = Math.round(Math.random()*100 + 100);
        this.price = this.cost + Math.round(Math.random()*50);
    }
}