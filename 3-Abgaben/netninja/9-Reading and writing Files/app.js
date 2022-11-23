const fs = require('fs');

let readMe = fs.readFileSync("./assets/loremipsum.txt", 'utf-8') // synchronous code
console.log(readMe);

fs.writeFileSync("./assets/writeme.txt")
//code

