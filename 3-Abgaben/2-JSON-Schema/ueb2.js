var data = require('./dataset.json');

var count = 0;

//A1.1
console.dir(data.data.length);

//A1.2
/* 
Wieviele Subscriptions von Frauen sind im Datensatz enthalten?
*/
var count = 0;
for (let index = 0; index < data.data.length; index++) {
    if(data.data[index].gender == "Female")
        count += 1;
}


console.log(count);
// A1.3
count = 0;
for (let index = 0; index < data.data.length; index++) {
    if(data.data[index].unsubscribed_at != null)
        count += 1;
}

console.log(count);


// A1.4
count = 0;
var deadline = new Date(2017, 0, 1);
for (let index = 0; index < 10; index++) {
    var s = data.data[index].created_at;
    var tempDate = 
    new Date(parseInt(s.split(".")[2]),
    parseInt(s.split(".")[2]-1),parseInt(s.split(".")[0])) 
    
    if(data.data[index].unsubscribed_at == null && tempDate > deadline )
        count += 1;
}

console.log("A1.4: " + count);

// A1.5
count = 0;
var deadline = new Date(2017,0,1);
for (let index = 0; index < data.data.length; index++) {
    if(data.data[index].unsubscribed_at != null){
        var temp = new Date(data.data[index].unsubscribed_at)
        if ( temp < deadline){
            count +=1;
        }
    }
}

console.log(count);

//A3 
console.log("-------------------------------------------------")
console.log("A3.a");

console.dir(data.data.length);

delete data.data[1];

console.dir(data.data.length);

console.log("A3.b");



console.dir(data.data.length);



