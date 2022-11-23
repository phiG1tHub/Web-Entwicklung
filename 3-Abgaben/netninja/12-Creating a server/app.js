let http = require('http')
// requests have request headers and responses have response headers
// we can put the content type and a status code into the repose header

let server = http.createServer(function (req,res) {
    console.log('request was made: ' + req.url);

    res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
    res.end('Hey');
});

server.listen(3000,'127.0.0.1');
console.log('yo, now listening to port 3000')