/*
          ***********************************************************************
                  Print all elements of an array
          ***********************************************************************
*/
let heros = ["ironman", "thor", "hulk", "spiderman", "antman"];
//for loop
for(let i= 0 ; i < heros.length ; i++){
        console.log(heros[i]);
}

let cities = ["Dhaka", "chattogram", "sylhet", "khulna", "rajshahi"];
// for of loop
for(let city of cities){
  console.log(city.toUpperCase());
}
/*
          ***********************************************************************
                  Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
                  Find the average marks of the entire class.
                    
          ***********************************************************************
*/
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for(let i = 0; i<marks.length; i++){
          sum += marks[i];
}

let avg = sum / marks.length;
console.log(`average marks is: ${avg}`);

/*
          ***********************************************************************
                    Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

          ***********************************************************************
*/

let prices = [250, 645, 300, 900, 50];

for( let i=0; i< prices.length; i++){
        let offer = prices[i] / 10;
        prices[i] -= offer;
}
console.log(prices);