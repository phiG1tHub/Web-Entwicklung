//A1
// installiere 
//A2
function calculateAverage(data) {
    //variable für die Summe anlegen
    let sum = 0;
    //in 
    for (let val of data){
        sum+=val;
    }
    
    return sum / data.length;
}

function calculateAverageAndDeviation(data) {
    let average = calculateAverage(data);
    
    let variance = 0;

    for (let val of data){
        variance += (val - average) * (val-average); 
    }

    variance /= data.length

    let deviation = Math.sqrt(variance);

    return{
        average : average,
        deviation : deviation,
    }
}
//A3
function calculateWeightedSum1(data) {
    // in reduce in jedem schritt das Produt aus Wert und Gewichten aufsummieren. wWichtig startwert
    
    return data.reduce((result, current) => result += (current.value * current.weight),0.0)

}

calculateAverage.apply
calculateWeightedSum2.call
calculateWeightedSum2.bind

// 53,7 


function calculateWeightedSum2(data) {
      console.log(this);
      return this.reduce....  
}
//c)

data.myFunction = calculateWeightedSum2;


//A4
function flattenNames(list) {
    // neues Array für Ergebnis anlegen
    let result = [];
    // Laufe über Elemente in list 
    // -> jedes Element splitten: /, |,  und / 
    for (let element of list)
    {
     let splitted = element.split( / , |,| und /);
     result = result.concat(splitted) ;  
    };

    // Ergebnis-Array in ab
    return result.sort.reverse();