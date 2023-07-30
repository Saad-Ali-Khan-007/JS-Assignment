// Given 2 strings, create a new string by concatenating the original string using the '+' operator and the concat method
// const string1 = 'Hello'
// const string2 = ' World'

// const newString= string1 + string2
// const newString = `${string1} ${string2}`
// console.log(newString)

// Given a string, using loops print each character of the string on a new line
// const loopsWithString = 'Pakistan'
// for(i=0;i<loopsWithString.length;i++){
//     console.log(loopsWithString[i])
// }

// How you will get the last character from a string
// let string = 'Hello World'
// Answer: 
//charat method
// console.log(string.charAt(string.length-1))

// What is the equivalent method for the index operator '[]' to get the character of a certain position from a string
// let data = ['saad','anus','muzammil']
// let index = data.indexOf('anus')
// console.log(index)
// Given the following string:
// let string = 'Pakistan'
// How you will get the ascii code of the letter at the index 4
// const result = string.charCodeAt(4)
// console.log(result)
// Given an array of filenames, iterate over the array & print true on the console if the file is a txt file
const files = ['document.txt', 'hello.docx', 'names.xlsx', 'profile.txt', 'sample.ppt']
const extension = '.txt'

console.log(files.includes(extension,0))

// for(let i=0;i<files.length;i++){
//     let isTxt = files.filter(function(file){
//        console.log(file.indexOf(extension) !== -1)
//     })
// }




// Take an string as input from the user and print whether the string contains a vowel or not and also tell at which index the vowel occurs at first

// Given an string replace the character 'a' with 'e' and 'll' with 'oo'
const stringToChange = 'Hello World as Javascript';

// Given an string like this -> '12:00:00'
// Extract out the hrs, minutes and seconds from it.

// Take an string as input from user and also take a number as count and repeat the entered string count times and alert it
// Example:
// Entered string: 'Hello'
// Entered count : 3
// Result        : 'HelloHelloHello'
// Note: Use the builtin method to implement it