//getDATA
let data = null,
    table = document.querySelector('table'),
    queryData = function () {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('get', '/info', true);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
                    data = JSON.parse(xhr.responseText);
                    resolve(data)
                }
            }
            xhr.send('id=a');
        })
    };

let promise = queryData();
promise.then(data => {
    let curProduct = null;
    data.forEach(item => {
        let {
            product,
            region,
            sale
        } = item;
        let str = ``;
        if(!curProduct || curProduct !== product){
            curProduct = product;
            str += `<td rowspan="3">${curProduct}</td>`
        };
        
        let tr = document.createElement('tr');
        str += `<th>${region}</th>`
        sale.forEach(sale => {
            str += `<td>${sale}</td>`
        });
        tr.innerHTML = str;
        table.appendChild(tr);
    });
})


//getAll  


/**
 * 
 * @param {string} product 
 * @param {string} region 
 *      没有传参默认调用getAll方法
 *      根据参数进行渲染表格
 */
let render = function(product,region){


}

//hanledForm