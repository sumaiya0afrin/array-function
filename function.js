/* 
        **********************************************
        Qs. Create a function using the “function” keyword that takes a String as an argument &
        returns the number of vowels in the string.
        **********************************************
*/
function countVowel(str){
            let count = 0;

            for(const char of str){
                if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
                    count++;
                }
            }

            console.log(count);
}

/* 
        **********************************************
        Qs. Create an arrow function to perform the same task.
        **********************************************
*/

const countVow =(str) =>{
    let count = 0;

            for(const char of str){
                if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
                    count++;
                }
            }

            console.log(count);
}

/* 
        **********************************************
        Qs. For a given array of numbers, print the square of each value using the forEach loop.
        **********************************************
*/

let numbers = [1, 7, 5, 22, 35, 17,20];

numbers.forEach((num) =>{
    console.log(num**2);
})

/* 
        **********************************************
        Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.
        **********************************************
*/

let marks = [65, 45, 92, 72, 99, 91, 30];

let topper = marks.filter((mark) => {
        return mark > 90;
})

console.log(topper);

/* 
        ************************************************************
        Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
        Use the reduce method to calculate sum of all numbers in the array. 
        Use the reduce method to calculate product of all numbers in the array.
        ***********************************************************
*/

let n = prompt("Enter a number: ");
let arr = [];
for(let i=1; i <= n; i++){
        arr[i - 1] = i;
}
console.log(arr);

let sum = arr.reduce((prev, curr) =>{
            return prev + curr;
});

console.log(`summation is : ${sum}`);

let product = arr.reduce((prev, curr) =>{
    return prev * curr;
});

console.log("factorial is: ",product);