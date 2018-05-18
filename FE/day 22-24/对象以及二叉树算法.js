var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",    
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }
        }
    }
}

// 假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(name) {
    let ary = [];
    let loop = function (obj) {
        if(typeof obj !== 'object') return
        //如果当前这一项对应name就是传进来的name的话，停止循环
        if (obj.name === name) {
            ary.push(obj.id);
        } else {
            for (var key in obj) {
                let cur = obj[key];
                loop(cur)
            }
        }
    }
    loop(tree);
    return ary
}
console.log(findIdByName('Kai'))

// 假设id和name均不会重复，根据输入id找到对应的name
function findNameById(id) {
    let ary = [];
    let loop = function (obj) {
        if(typeof obj !== 'object') return
        //如果当前这一项对应name就是传进来的name的话，停止循环
        if (obj.id === id) {
            ary.push(obj.name);
        } else {
            for (var key in obj) {
                let cur = obj[key];
                loop(cur)
            }
        }
    }
    loop(tree);
    return ary
}

// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
function getListWithDLR(obj) {
    if(typeof obj !== 'object') return
    console.log(obj.name);
    for (var key in obj) {
        getListWithDLR(obj[key])
    }
}
// getListWithDLR(tree);

// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR(obj) {
    if(typeof obj !== 'object') return;
    getListWithLDR(obj.left);
    console.log(obj.name);
    getListWithLDR(obj.right);
    
}
getListWithLDR(tree);
// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD(obj) {
    if(typeof obj !== 'object') return;
    getListWithLRD(obj.left);
    getListWithLRD(obj.right);
    console.log(obj.name);
}
getListWithLRD(tree)