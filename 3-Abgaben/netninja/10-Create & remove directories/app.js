const fs = require("fs");

fs.mkdir('stuff', function () {
    fs.readFile("readMe.txt", 'utf-8', function (err, data){
        fs.writeFile('./stuff/writeMe.txt',data);
    });
});
fs.unlink("./stuff/writeMe.txt", function (){
    fs.rmdir('stuff');
});
fs.rmdir()