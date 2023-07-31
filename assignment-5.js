// Task (Study the following two topics on your own)
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy

// Create a function which takes 3 arguments and return the Largest number among the 3
// use ternary operator for conditionals

const num1 = 34;
const num2 = 56;
const num3 = 76;
let num;

function largeNum(num1, num2, num3) {
  num = (num1 > num2 && num1>num3) ?  num1 : num3; ( num2 > num3) ? num2 : num3;
  console.log(num);
}
largeNum();

// //we can also do this way
// console.log(Math.max(1, 3, 2));
// // Expected output: 3

// console.log(Math.max(-1, -3, -2));
// // Expected output: -1

// const arrayOfNumber = [1, 3, 2];

// console.log(Math.max(...array1));
// Expected output: 3
// Take 2 numbers as input from the user and an operation which user wants to perform on those numbers then use the switch statement to implement it and alert the result

var array = [
  [
    [1, [13, 14], 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, [[16, 17], 18]],
  ],
];

// extract out 17, 14, 18 using the indexing operator and save them in these variables
// const seventeen;
// const fourteen;
// const eighteen;

// remove the elements one by one from the array2 and add them into array1 in such a way that the resultant array looks like this
// [1,2,3,4,5,6,7,8,9,10]
// hint(push, pop, shift, unshift)
const array1 = [5, 6, 7];
const array2 = [4, 8, 9, 3, 2, 1, 10];
