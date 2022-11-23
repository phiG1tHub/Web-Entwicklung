var data = require('./dataset.json');

var count = 0;

//A1.1 Wie viele Einträge hat der Datensatz?
console.dir("Der Datensatz ist " + data.data.length + " lang");

//A1.2
/* 
Wie viele Subscriptions von Frauen sind im Datensatz enthalten?
*/

var count = 0;
for (let index = 0; index < data.data.length; index++) {
    if(data.data[index].gender == "Female")
        count += 1;
}


console.log("Es gibt: " + count + " Subscriptions von Frauen");
// A1.3 Wie viele aktive Nutzer sind insgesamt erfasst?
count = 0;
for (let index = 0; index < data.data.length; index++) {
    if(data.data[index].unsubscribed_at != null)
        count += 1;
}

console.log("Es gibt " + count + " aktive Nutzer");


// A1.4 Wie viele derzeit aktive Subscriptions sind seit dem 01.01.2017 hinzugekommen?
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

console.log("Seit dem 01.01.2017 sind " + count + " aktive Nutzer hinzugekommen");

// A1.5 Wie viele Subscriptions wurden bis zum 01.01.2017 (exklusive) wieder gekündigt?
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

// (Bonus) Welche Themen (subscribed) haben die noch aktiven Nutzer mit dem frühsten
// Erstellungsdatum im Datensatz?

function findEarliestDate(data){
    var tmp = data;
    for (let i = 0; i < data.data.length; i++) {

    }
}



