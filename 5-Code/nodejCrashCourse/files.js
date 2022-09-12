const fs = require('fs');

// reading
fs.readFile('./docs/blog1.txt', 'hello, world',() => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

//writing files
fs.writeFile('./docs/blog2.txt', 'hello again' , () => {
    console.log('file was written');
});
console.log('last line')
// directories
if (!fs.existsSync('./assets')){
    fs.mkdir('./assets' , (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}

// deleting files

if ( fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted');
    })
}

