const http = require('http');

const server = http.createServer( (req,res) => {
    // request Objekt
    console.log(req.url, req.method);
    // 
    // set header content type
    res.setHeader('Content-Type', 'text/html');

    res.write('<head> <link rel="StyleSheet" href ="#"> </head>');
    res.write('<p> hello, ninjas </p>');
    res.write('<p>hello again fucker </p>');
    //schreibe in das response Objekt
    res.write('tits butthole'); //schreibe in das response Objekt
    res.end();


});

server.listen( 3000 , 'localhost' , () => {
    console.log('listening for requests on port 3000');
});

//ports are like doors into computers
