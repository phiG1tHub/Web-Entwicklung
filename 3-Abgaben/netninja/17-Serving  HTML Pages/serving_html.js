let http = require('http')
let fs = require('fs')

let myReadStream = fs.createReadStream(__dirname + '/a.txt')
let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')


myReadStream.pipe(myWriteStream);


let server = http.createServer(function (req,res) {
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type' : 'text/html'});
    let myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf-8')
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');