const http = require('http');
const fs = require('fs');



const server = http.createServer( (req,res) => {
    // request Objekt
    console.log(req.url, req.method);
    // 
    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views';
    switch (req.url) {
        case '/':
            path+='index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path+="about.html"
            res.statusCode = 200;
            break;
        default:
            path+='404.html';
            res.statusCode = 404;
            break;
        
    }

    //sendFile
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.end(data);
        }
    })

});

server.listen( 3000 , 'localhost' , () => {
    console.log('listening for requests on port 3000');
});

//ports are like doors into computers
