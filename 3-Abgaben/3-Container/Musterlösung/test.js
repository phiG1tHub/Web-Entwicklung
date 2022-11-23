import * as uebung3 from './ES.mjs'
console.log(Container.getInstances());

let c1 = new Container();
console.log(c1.getAll())

console.log(Container.getInstances());

let c2 =  new Container("A", "B", "1");
console.log(c2.getAll())

console.log()

