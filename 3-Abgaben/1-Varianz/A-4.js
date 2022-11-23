let assert = require('assert');
data = [
    "Justus, Peter und Bob",
    "Christian",
    "Susi und Strolch",
    "Heinz",
    "Daniel,Gert",
    "John und George und Paul und Ringo"
]

function removeCommas(data ){
for (let i = 0; i < data.length; i++) {
   data[i] = data[i].replace(",", " ");
}
return data;
}
console.dir(data)



function splitWords(data){
    data = removeCommas(data)
    words = [];
    let tmp;
    for (let i = 0; i < data.length; i++) {
        tmp =  data[i].split(" ");
        for (let j = 0; j < tmp.length; j++) {
            if(tmp[j] !== "" && tmp[j] !== "und")
                words.push(tmp[j]);
        }
    }
    return words;
}

//console.dir(splitWords(data))


function splitWords2(data){
    return data.map(x => x.replace(/, /g," "))
               .map(x => x.replace("  "," "))
               .map(x => x.replace(/ und /g, " "))
               .map(x=> x.replace(",", " "))
               .flatMap(x => x.split(" "));
}

function splitWords3(data){
    return data.map(x => x.replace(/, /g," "))
        .map(x => x.replace("  "," "))
        .map(x => x.replace(/ und /g, " "))
        .map(x=> x.replace(",", " "))
        .flatMap(x => x.split(" "))
        .sort().reverse();
}





console.dir(splitWords3(data))