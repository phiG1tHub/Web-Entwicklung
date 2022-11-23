//A3
const data = require("./dataset.json");
console.log("-------------------------------------------------")
console.log("A3.a");

console.dir(data.data.length);

delete data.data[1];

console.dir(data.data.length);

console.log("A3.b");



console.dir(data.data.length);