let  interests = ['coding', 'friends', 'crafting', 'baking'];

interests.push("eating", "travelling"); // change original array
console.log(interests);

interests.pop(); // change original array
console.log(interests);

console.log(interests.toString()); // do not change original array

let cartoonCharacter1 = ['mr. bean','tom', 'jerry', 'oggy'];
let cartoonCharacter2 = ['mickey mouse', 'dora', 'ninja hattori'];
let cartoonCharacter3 =['motu', 'patlu'];

let cartoons = cartoonCharacter1.concat(cartoonCharacter2, cartoonCharacter3);  // do not change original array
console.log(cartoons);

cartoonCharacter2.unshift("spongebob"); // add element to the first 
cartoonCharacter2.shift(); // delete first element

console.log(cartoonCharacter1.slice(1,3));

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(arr.splice(2, 2, 9,10,11));
console.log(arr);

/*
        ***************************************************
                    task: apply the array methods
        ***************************************************
*/

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift()
console.log(companies);

companies.splice(1,1,"Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);