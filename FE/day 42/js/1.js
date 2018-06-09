

let fs = require('fs');
let util = require('util');
let read = util.promisify(fs.readFile);
async function fn(){
    let f1 = await read('./2.js')
    console.log(f1);
    
    return f1
};
fn().then(res=>{
    console.log(res);
})