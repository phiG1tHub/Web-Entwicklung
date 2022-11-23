// split code into different modules

let counter = function (arr){
    return 'there are ' +arr.length + ' elements in this array';
};

let adder = function (a,b){
    return `The sum of the 2 numbers is ${a+b}` // template string
};

let pi = 3.142;


module.exports = {
    counter: counter(),
    adder: adder(),
    pi:pi
};