let singleton = (function () {
    let data = window.localStorage.getItem('product1'),
        productList = [],
        regionList = [];
    let table = document.querySelector('table'),
        tableHTML = table.innerHTML,
        productBar = document.querySelector('#product'),
        regionBar = document.querySelector('#region'),
        productCheckBox = null,
        regionCheckBox = null,
        productALL,
        regionALL;
    /**
     * 获取数据
     */
    let getData = function () {
        return new Promise((resolve, reject) => {
            if (data) {
                data = JSON.parse(data);
                resolve();
            } else {
                let xhr = new XMLHttpRequest();
                xhr.open('get', '/info');
                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        data = JSON.parse(xhr.responseText);
                        window.localStorage.setItem('product1', JSON.stringify(data));
                        resolve()
                    }
                };
                xhr.send(null);
            }
        })
    }

    /**
     * 渲染全部数据
     */
    let initRender = () => {
        console.log(1);

        let curProduct = null,
            curRegion = null;
        data.forEach((item, index) => {
            let {
                product,
                region,
                sale
            } = item;

            let tr = document.createElement('tr');
            let productTD = document.createElement('td');
            productTD.innerHTML = product;
            tr.appendChild(productTD);
            tr.className = 'delete';
            let regionTD = document.createElement('td');
            regionTD.innerHTML = region;
            tr.appendChild(regionTD);
            sale.forEach((sale, _index) => {
                let saleTD = document.createElement('td');
                saleTD.innerHTML = saleTD.innerHTML = `<input type="text" disabled value=${sale}>`;
                tr.appendChild(saleTD);
                let _ob = new Observer(saleTD, index, _index);
                _ob.on('change',function(){
                    data[this.index].sale[this._index] = this.value;
                    window.localStorage.removeItem('product1');
                    window.localStorage.setItem('product1',JSON.stringify(data));
                })
            });
            table.appendChild(tr);
            if (productList.indexOf(product) < 0) {
                productList.push(product);
            };
            if (regionList.indexOf(region) < 0) {
                regionList.push(region)
            }
        });
        checkBoxRender();
    }

    /**
     * 对下方checkbox进行渲染
     */
    let checkBoxRender = function () {
        let productHTML = productBar.innerHTML,
            regionHTML = regionBar.innerHTML;
        productList.forEach(item => {
            productHTML += `<input type="checkbox" name="product" class="input" checked value=${item}>${item}`
        });
        productHTML += `<input type="checkbox" name="product" id="productALL" checked>全选`;
        regionList.forEach(item => {
            regionHTML += `<input type="checkbox" name="region" class="input" checked value=${item}>${item}`
        });
        regionHTML += `<input type="checkbox" name="region" id="regionALL" checked>全选`
        productBar.innerHTML = productHTML;
        regionBar.innerHTML = regionHTML;
        regionALL = document.querySelector('#regionALL');
        productALL = document.querySelector('#productALL');
    }


    /**
     * 
     * @param {*} productList 
     * @param {*} regionList 
     * 数据变化时渲染页面的函数
     */
    let render = function (productList, regionList) {
        let deleteItems = document.querySelectorAll('.delete');
        Array.from(deleteItems).forEach(item => {
            let parent = item.parentNode;
            parent.removeChild(item);
        });
        let ary = [];
        data.forEach(item => {
            if (productList.indexOf(item.product) >= 0 &&
                regionList.indexOf(item.region) >= 0 &&
                ary.indexOf(item) < 0) {
                ary.push(item);
            }
        });
        ary.forEach((item, index) => {
            let {
                product,
                region,
                sale
            } = item;
            let tr = document.createElement('tr');
            tr.className = 'delete';
            let productTD = document.createElement('td');
            productTD.innerHTML = product;
            tr.appendChild(productTD);
            let regionTD = document.createElement('td');
            regionTD.innerHTML = region;
            tr.appendChild(regionTD);
            sale.forEach((sale, _index) => {
                let saleTD = document.createElement('td');
                saleTD.innerHTML = `<input type="text" disabled value=${sale}>`;
                tr.appendChild(saleTD);
                new Observer(saleTD, index, _index);
            });
            table.appendChild(tr);
            if (productList.indexOf(product) < 0) {
                productList.push(product);
            };
            if (regionList.indexOf(region) < 0) {
                regionList.push(region)
            }
        })
    }


    /**
     * 给checkBox绑定事件
     */
    let handleCheckBox = function () {
        productCheckBox = document.querySelectorAll('#product .input');
        regionCheckBox = document.querySelectorAll('#region .input');
        Array.from(productCheckBox).forEach(item => {
            item.onchange = function (e) {
                console.dir(e.target);

                if (productList.length === 1 && !e.target.checked) {
                    e.target.checked = 'checked';
                    return
                }
                if (this.checked) {
                    productList.push(this.value);
                } else {
                    let index = productList.indexOf(this.value);
                    productList.splice(index, 1);
                };
                if (productList.length === 3) {
                    productALL.checked = 'checked';
                } else {
                    productALL.checked = false;
                };

                render(productList, regionList)
            }
        });
        Array.from(regionCheckBox).forEach(item => {
            item.onchange = function (e) {
                if (regionList.length === 1 && !e.target.checked) {
                    e.target.checked = 'checked';
                    return
                };
                if (this.checked) {
                    regionList.push(this.value);
                } else {
                    let index = regionList.indexOf(this.value);
                    regionList.splice(index, 1);
                };
                if (regionList.length === 3) {
                    regionALL.checked = 'checked';
                } else {
                    regionALL.checked = false;
                };
                render(productList, regionList)
            }
        });
    }

    /**
     * 全选框绑定事件
     */
    let handleCheckBoxAll = function () {
        productALL.onchange = function () {
            if (productList.length < 3) {
                productCheckBox.forEach(item => {
                    item.checked = 'checked';
                    if (productList.indexOf(item.value) < 0) {
                        productList.push(item.value)
                    }
                })
                render(productList, regionList);
            }
        }
        regionALL.onchange = function () {
            if (regionList.length < 3) {
                regionCheckBox.forEach(item => {
                    item.checked = 'checked';
                    if (regionList.indexOf(item.value) < 0) {
                        regionList.push(item.value)
                    }
                })
                render(productList, regionList);
            }
        }
    }

    return {
        init: function () {
            getData()
                .then(initRender)
                .then(() => {
                    handleCheckBox();
                    handleCheckBoxAll();
                })

        }
    }
})();

singleton.init()
