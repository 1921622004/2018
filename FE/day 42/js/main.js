let restaurantRender = (function () {
    //生成新餐厅
    let curRestaurant = new Restaurant({
        capital: 0,
        seats: 1,
        staff: []
    });

    //新餐厅hire
    let newCook = new Cook({
        name: 'cook1',
        salary: 0
    })
    curRestaurant.hire(newCook);
    let newWaiter = new Waiter({
        name: 'waiter1',
        salary: 0
    });
    curRestaurant.hire(newWaiter);


    return {
        init: function () {
            //顾客进店
            
            let fn = function () {
                let newClient = new Client();
                curRestaurant.welcome(newClient);
                newWaiter.work(newCook, newClient.orderSth())
                    .then((arg) => {
                        return newWaiter.work(arg);
                    })
                    .then(() => {
                        curRestaurant.leave(newClient);
                    })
                    .then(()=>{
                        setTimeout(()=>{
                            fn()
                        },3000)
                    })
            };
            fn()
        }
    }
})()
restaurantRender.init()