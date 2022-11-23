// normal function statement
function sayHi(){
    console.log('hi');
}

sayHi();

// function expression

var sayBy = function (){
    console.log('bye');
};

sayBy();

function callFunction(fun){
    fun();
}
callFunction(sayBy)
