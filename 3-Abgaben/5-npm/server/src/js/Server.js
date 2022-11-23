let http = require('http')
let fs = require('fs')
let path = require('path')
src = "C:\\Informatik WS22-23\\5-Web-Entwicklung\\3-Abgaben\\5-npm\\"

//let extname = path.extname(filePath);


let server = http.createServer(function (req,res) {
    console.log('request was made: ' + req.url);

    if( req.url === '/' ){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        let myReadStream = fs.createReadStream(src + '/index.html', 'utf-8')
        myReadStream.pipe(res);
    }

    if ( req.url === '/bundle.js'){
        res.writeHead(200, {'Content-Type' : 'text/javascript'})
        let myReadStream = fs.createReadStream(src + 'bundle.js')
        myReadStream.pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');
console.log(src+ "/index.html");