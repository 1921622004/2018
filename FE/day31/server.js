let http = require('http');
let url = require('url');
let fs = require('fs');
let mime = require('mime')
let port = 3000;
let sourceData = JSON.parse(fs.readFileSync('./js/source.json'));


let server = http.createServer((req, res) => {
    let {
        pathname,
        query
    } = url.parse(req.url);

    if (pathname === '/info') {
        res.writeHead(200, 'content-type:text/json');
        res.end(JSON.stringify(sourceData));
        return;
    };

    if (pathname === '/changeInfo') {
        let str = ''
        req.on('data', chunk => {
            str += chunk;
        });
        req.on('end', () => {
            let obj = {};
            str.replace(/(\w+)=(\w+)/g, (...arg) => {
                obj[arg[1]] = arg[2];
            });
            sourceData[obj.index].sale[obj.Index] = obj.value;
            fs.writeFile('./js/source.json',JSON.stringify(sourceData),err =>{
                console.log(err)
            });
            res.writeHead(200,'ok');
            res.end();
            return
        })
        return;
    }
    fs.stat('.' + pathname, (err, stats) => {
        if (err) {
            res.end(`${pathname} not found`)
        } else if (stats.isFile()) {
            res.setHeader('content-type', mime.getType('.' + pathname) + ";charset=utf-8");
            fs.createReadStream('.' + pathname).pipe(res)
        } else if (stats.isDirectory()) {
            res.setHeader('content-type', 'text/html;charset=utf-8');
            fs.createReadStream('.' + pathname + 'index.html').pipe(res);
        }
    })
})

server.listen(port, () => {
    console.log(`服务已经在${port}端口开启`);
})