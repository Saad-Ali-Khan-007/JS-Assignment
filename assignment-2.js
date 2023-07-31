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
//we can also use includes method which is shown below
// Given the following string:
// let string = 'Pakistan'
// How you will get the ascii code of the letter at the index 4
// const result = string.charCodeAt(4)
// console.log(result)
// Given an array of filenames, iterate over the array & print true on the console if the file is a txt file
// const files = ['document.txt', 'hello.docx', 'names.xlsx', 'profile.txt', 'sample.ppt']
// const extension = '.txt'


// for(let i=0;i<files.length;i++){
//     let isTxt = files[i].includes(extension)
//        console.log(isTxt)
//     }





// Take an string as input from the user and print whether the string contains a vowel or not and also tell at which index the vowel occurs at first
// function getVowel(){
//     let vowelCount = 0
//     let getString= prompt('Enter string',"Type here")
//     let vowel = getString.match(/[aeiou]/gi).join("") 
//     let index = getString.indexOf(vowel)
//     console.log(index)
//     console.log(vowel)
//     for(let i=0;i<getString.length;i++){
//     if(getString.charAt(i) === "a" || getString.charAt(i) === "e" || getString.charAt(i) === "i" || getString.charAt(i) === "o" || getString.charAt(i) === "u") {
//         vowelCount+=1
        

// }
//     }
//     return vowelCount
// }
// console.log(getVowel())






// Given an string replace the character 'a' with 'e' and 'll' with 'oo'
// const stringToChange = 'Hello World as Javascript';
// console.log(stringToChange.replace("a","e").replace("a","e").replace("a","e").replace("ll","oo"))


// Given an string like this -> '12:00:00'
// Extract out the hrs, minutes and seconds from it.

// let time = '12:00:00 PM',
//     hours = time.split(':')[0],
//     minutes = time.split(':')[1],
//     seconds = time.split(':')[2].split(' ')[0];
//     console.log(hours)
//     console.log(minutes)
//     console.log(seconds)

// Take an string as input from user and also take a number as count and repeat the entered string count times and alert it
// Example:
// Entered string: 'Hello'
// Entered count : 3
// Result        : 'HelloHelloHello'
// Note: Use the builtin method to implement it

    // const getString = prompt("String","Type Here")
    // const getCount = prompt("Number",0)

    // const noOfString = getString.repeat(getCount)

    // console.log(noOfString)
