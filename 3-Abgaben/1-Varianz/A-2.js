/*  Aufgabe 2: Berechnung des arithmetischen Mittelwerts
*
* Schreiben Sie eine Funktion, die den arithmetischen Mittelwert eines Number-Arrays berechnet. Nutzen Sie
* die Methoden des console-Objekts (siehe Node.js-Dokumentation: Console) zur Ausgabe der Ergebnisse.
*
* Testen Sie Ihre Funktion mit den unten vorgegeben Testdaten.
*
* */


console.log(calculateAverage([1, 2, 3, 4, 5])); // 3
console.log(calculateAverage([2, 2, 3, 3])); // 2.5
console.log(calculateAverage([6, 5, 3, 9, 2])); // 5

export function calculateAverage(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];

    }
    let average = sum / numbers.length;
    return average;
}

function calculateAverage2(values){
    let sum =0;
    for(let v in values){
        sum+=values[v];
    }
    return sum/ values.length;
}

function calculateAverage2(values){
    let sum =0;
    for(let v of values){
        sum+=v; // for of nur wenn die Reihenfolge egal ist.
    }
    return sum/ values.length;
}

/*  Aufgabe 2: Berechnung des arithmetischen Mittelwerts
*
* Berechnung der Standardabweichung
* Erweitern Sie Ihre Funktion um die Berechnung der Standardabweichung eines Number-Arrays. Diese eine
* Funktion soll sowohl den Mittelwert als auch die Standardabweichung zurückgeben.
* Testen Sie Ihre Funktion mit den unten vorgegeben Testdaten.
*
* */


export function calculateAverageAndDeviation(numbers) {
    let average = calculateAverage(numbers);
    let varianz = 0;
    for (let i = 0; i < numbers.length; i++) {
        varianz += Math.pow(average - numbers[i], 2);
    }
    varianz /= numbers.length; // n-1 ???
    let deviation = Math.sqrt(varianz);

    let AverageAndDeviation = {"average": average, "deviation": deviation}
    return AverageAndDeviation;
}

function calculateAverageAndDeviation2(values) {
    let average = calculateAverage(numbers);
    let varianz = 0;
    for(let v of values){
        varianz += Math.pow(v - average,2);
    }
    let deviation = Math.sqrt(varianz /= numbers.length);
    return {"average": average, "deviation": deviation};
}

console.dir(calculateAverageAndDeviation([1, 2, 3, 4, 5]));
/*
{
average: 3,
deviation: 1.41...
}
*/