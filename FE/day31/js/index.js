let data = null,
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
promise.then(data=>{
    console.log(data)
})

