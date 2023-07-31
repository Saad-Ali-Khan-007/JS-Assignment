// Take age as input from the user and alert 'allow' or 'deny' based on the conditions
// - the user's age is greater than or equal to 18 years (allowed)
// - the user's age is less than 18 (denied)

// const getAge = prompt("Enter your age",0)
// if(getAge>=18){
//   console.log('Allow')
// }else{
//   console.log('Deny')
// }

// Take a number input from the user and alert the message based on the following conditions
// alert('Condition 1 fulfilled'): if the number is between 2 and 5 inclusive
// alert('Condition 2 fulfilled'): if the number is between 6 and 10 inclusive
// alert ('Condition 2 fulfilled'): if the number is greater than 10

// const getNumber = prompt("Enter your number",0)
// if(getNumber>2&&getNumber<5){
//   alert('Condition 1 is filled')
// }else if(getNumber>6&&getNumber<10){
//   alert('Condition 2 is fullfilled')
// }else{
//   alert('Condition 3 is fullfilled')
// }

// Which opertor is used to check whether a property exists on that object
// Answer: we can check by either hasOwnProperty() or by (in)
// hasOwnProperty() only cheks for direct properties whereas in will check for both direct and builtin properties


// check whether the property 'property2' exists on the object
// const exampleObject = {
//   property1: "value1",
//   property3: "value3",
// };
// const checkProperty='property2' in exampleObject
// console.log(checkProperty)
// Comment what will be the result of the following conditional checks
// console.log(5 == 8); //false
// console.log(undefined == null);//true
// console.log(0 == false);//true
// console.log("2" != 2);//false
// console.log(1 !== true);//true
// console.log(undefined != null);//false
// console.log("0" != false);//false
// console.log(!false);//true
// console.log(1 === true);//false
// console.log(0 === 0);//true
// console.log(1 != true);//false
// console.log(0 !== false);//true
// console.log(0 != false);//false
// console.log("4" == 4);//true
// console.log("0" === false);//false
// console.log("0" == false);//true
// console.log(0 === false);//false
// console.log(1 == true);//true
// console.log(7 != 7);//false
// console.log(!true);//false
// console.log(undefined === null);//false
// console.log(4 !== 2);//true
// console.log("2" === 2);//false
// console.log("2" !== 2);//true
// console.log(undefined !== null);//true
// console.log("0" !== false);//true

// Take a number input from the user and log the table of that number
// const getNumber = prompt("Enter your number",0)
// for(let i =1;i<=10;i++){
//   console.log(`${getNumber} * ${i} = ${getNumber*i}`)
// }
// Take 2 numbers as input from the user and alert whether the first number is completely divisible by second or not.
// const num1 = prompt('Enter first number',0)
// const num2 = prompt('Enter second number',0)

// if (num1%num2===0){
//   alert("It is completely divisible")
// }else{
//   alert('It is not divisible')
// }