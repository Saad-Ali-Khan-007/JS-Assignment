// Write the implmentation of the function multiplyNumbers so that the following code should run properly


// function multiplyNumbers(){
// // console.log(arguments)
//      let a=1
//      for(let i=0 ; i<arguments.length ; i++){
//           a *= arguments[i]
//      }
//      return a
     
// }
function multiplyNumbers(...multiplier){
// console.log(arguments)
 let a = 1
     for(let i =0 ; i<multiplier.length ; i++){
          a *= multiplier[i]
     }
     return a
     
}
//https://levelup.gitconnected.com/how-to-write-function-with-n-number-of-parameters-in-javascript-a916de1be7a2//explanation
console.log(multiplyNumbers(1, 2, 3, 4, 5)); // expected result: 120
console.log(multiplyNumbers(9, 2, 7)); // expected result: 126

// Use the following api and get the data for all the available countries and provinces (use Fetch)
// const URL = "https://documenter.getpostman.com/view/10808728/SzS8rjbc";
// fetch('https://api.covid19api.com/countries')
// .then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch(error=>console.log('Error:Something went wrong'))
