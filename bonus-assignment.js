// Write the implementation the following function which takes an argument (number) and returns the factorial of it

const factorial = (n) => {

if (n < 0) {
    return 'Error! Factorial for negative number does not exist.';
}

else if (n === 0) {
    return `The factorial of ${n} is 1.`;
}

else {
    let fact = 1;
    for (i = 1; i <= n; i++) {
        fact *= i;
    }
    return `The factorial of ${n} is ${fact}.`;
}
};

console.log(factorial(5));
console.log(factorial(8));
console.log(factorial(1));

// Write the implementation of the following function which takes an argument (string) and returns the number of vowels present in it

const numberOfVowels = (s) => {
  let vowelCount = 0
  for(let i=0;i<s.length;i++){
    if(s.charAt(i) === "a" || s.charAt(i) === "e" || s.charAt(i) === "i" || s.charAt(i) === "o" || s.charAt(i) === "u") {
        vowelCount+=1
        

}
    }
    return vowelCount
};

console.log(numberOfVowels("hello world"));
console.log(numberOfVowels(""));
console.log(numberOfVowels("niceee"));
console.log(numberOfVowels("qwrtypsdfghjklzxcvbnm"));

// Write the implementation of the following function which takes an object and returns the number of properties on it

const numberOfProperties = (obj) => {
 const objFromArray = Object.keys(obj).length
 return objFromArray 
};

console.log(numberOfProperties({}));
console.log(numberOfProperties({ name: "John", age: "nice" }));
console.log(numberOfProperties(window));
