// (Note: use higher order array methods)

// Given an array of numbers create a new array with squares of the numbers
// const numbers = Array(10)
//   .fill(5)
//   .map(() => parseInt(Math.random() * 100 + 5));
//   console.log(numbers)
//   const squaresNumbers = numbers.map((number)=>number*number)
//   console.log(squaresNumbers)

// Given a mixed array filter out the even numbers from the array
// const numbers = Array(10)
//   .fill(10)
//   .map(() => parseInt(Math.random() * 100 + 5));
//   console.log(numbers)
//   const evenNumber = numbers.filter((evenNum)=>evenNum%2==0)
//   console.log(evenNumber)

// Given an array of objects having a property age on them print how many of them are eligible to get an NIC i.e their age is greater than or equal to 18

// const persons = Array(10)
//   .fill(10)
//   .map(() => (
//     {age: parseInt(Math.random() * 80 + 10),}
//     ));
//     console.log(persons)
//     for(i=0;i<persons.length;i++){
//   if(persons[i].age>=18){
//     console.log("Eligible for NIC")
//     console.log(`age = ${persons[i].age}`)
//   }else{
//     console.log('Not Eligible')
//     console.log(`age = ${persons[i].age}`)
//   }
// }
// // Print on the screen whether all of the persons in the person array are eligible for NIC
// // Print on the screen whether some of the persons in the person array are eligible for NIC




// Use the array of numbers from the first question and calculate the sum of all the numbers using the reduce function
// const numbers = Array(10)
//    .fill(5)
//   .map(() => parseInt(Math.random() * 100 + 5));
//   console.log(numbers)
  
//   const numbersSum = numbers.reduce((total,number)=>total+number,0)
//   console.log(numbersSum)

// Use the array of numbers from the first question and print the minimum of all the numbers using the reduce function
// const numbers = Array(10)
//    .fill(5)
//   .map(() => parseInt(Math.random() * 100 + 5));
//   console.log(numbers)
//   const numbersSum = numbers.reduce((a,b)=>Math.min(a,b))
//   console.log(numbersSum)
// Use the array of numbers from the first question and print the maximum of all the numbers using the reduce function

// const numbers = Array(10)
//    .fill(5)
//   .map(() => parseInt(Math.random() * 100 + 5));
//   console.log(numbers)
// const numbersSum = numbers.reduce((a,b)=>Math.max(a,b))
//   console.log(numbersSum)