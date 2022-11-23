//a)

var data = [
    { value: 10, weight: 1 },
    { value: 16, weight: 0.3 },
    { value: 12, weight: 0.4 },
    { value: 20, weight: 0.5 },
    { value: 32, weight: 0.4 },
    { value: 11, weight: 0.3 },
    { value: 8, weight: 1 },
];
function calculateWeightedSum(numbers) {
    let weightedSum = 0;

    for (let i = 0; i < numbers.length; i++) {
        weightedSum += numbers[i]["value"] * numbers[i]["weight"];
    }

    return weightedSum;
}

function calculateWeightedSum2(numbers) {
   return numbers.reduce((result,current) => {
        return result + (current.value * current.weight);
    }, 0);
}

function calculateWeightedSum3() {
   return this.reduce((result,current) => {
        return result + (current.value * current.weight);
    }, 0);
}

console.dir(calculateWeightedSum(data))

//b)

function calculateWeightedSum(numbers) {
    let weightedSum = 0;

    for (let i = 0; i < numbers.length; i++) {
        weightedSum += numbers[i]["value"] * numbers[i]["weight"];
    }

    return weightedSum;
}

console.dir(calculateWeightedSum3().bind(data)());

// c)

data.calculateWeightedSum = calculateWeightedSum3;

console.dir(data.calculateWeightedSum())