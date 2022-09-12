/**
 * npmjs.com
 * npm install -g nodemon
 * package.json keeps track of 3rd party packages
 * npm -init
 * lodash
 * npm install installiert alle abhängigkeiten aus der Package.json 
 * 
 */

 const http = require('http');
 const fs = require('fs');
 const _ = require('lodash');
 
 
 const server = http.createServer( (req,res) => {

    //lodash
    const num = _.random(0,20);
    console.log(num);
    const greet = _.once(() => {
        console.log('hello');
    });

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
 