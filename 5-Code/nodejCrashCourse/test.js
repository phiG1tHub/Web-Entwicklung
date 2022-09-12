const name = 'Herrscher und Meister allen Lebens';

console.log(name);

const greet = (name) =>
{
    console.log('hello', name);
}

greet('mario');
greet('god');

/*
    Das Globale Objekt ist wie das Window Objekt
    Window ist das Globale objekt des Browsers  
*/
/* 
console.log(global);

global.setTimeout(() => {
    console.log('in the timeout')
    clearInterval(int);

}, 3000);

const int = setInterval(() => {
    console.log('in the interval');
}, 1000); */

console.log(__dirname);
console.log(__filename);

