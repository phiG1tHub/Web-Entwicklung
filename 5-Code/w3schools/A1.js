function calculateAverage(a){
	let erg = 0;
	for( let i = 0; i<a.length;i++)
	   erg+=a[i];
	erg/=a.length;
	return erg;
}

console.log(calculateAverage([1, 2, 3, 4, 5])); 


function calculateVarianz(a){
	let avg = calculateAverage(a);
	let s_squared= 0;
	for (let i = 0; i < a.length; i++) {
		s_squared += (a[i]-avg)**2;
	}
	erg = s_squared / a.length;
	return erg;
}

console.log(calculateVarianz([1,2,3,4,5]));

function calculateAverageAndDeviation(a) {
	s_squared = calculateVarianz(a);
	return s = Math.sqrt(s_squared);
}
console.log(calculateAverageAndDeviation([1, 2, 3, 4, 5]));
/*
{
average: 3,
deviation: 1.41...
}
*/

// A3

var data = [
{ value: 10, weight: 1 },
{ value: 16, weight: 0.3 },
{ value: 12, weight: 0.4 },
{ value: 20, weight: 0.5 },
{ value: 32, weight: 0.4 },
{ value: 11, weight: 0.3 },
{ value: 8, weight: 1 },
];

function calculateWeightedSum(arr) {
	let erg=0;
	for (let index = 0; index < arr.length; index++) 
		erg += arr[index].value*arr[index].weight;
	return erg;
}
console.log("data value: " + data[1].value);
console.log(calculateWeightedSum(data)  + " end A3");

// A4

arr = ["Justus, Peter und Bob", "Christian", "Susi und Strolch", "Heinz", "Daniel,Gert",
"John und George und Paul und Ringo"];

function isUpperCase(aCharacter)    
{    
    return (aCharacter >= 'A') && (aCharacter <= 'Z');
}

function words(arr){
	var re = new RegExp("");
	var last = 0 ;
	var erg = [];
	
	arr.forEach(element => {
		console.log("A4 : " + element);
		for (const c in element) {
			console.log(element.charAt(c) + " " + String(c));
			if(isUpperCase(element.charAt(c))){
				last = c;
				console.log(last)
			}
			if(element.charAt(c) === " " || element.charAt(c) === ","){
				console.log(element.charAt(c)+ "this is a comma or a space");
				console.log(last + " to " + c + element.slice(last,c+1));
				erg.push(element.slice(last,c+1));
			}
		}
	});
	
	//erg.sort()
	return erg;
}

console.log("A4: " + words(arr));