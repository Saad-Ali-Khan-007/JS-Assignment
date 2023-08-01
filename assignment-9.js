// Use the concept of closures and create a function which returns an object with 2 properties of name and age and their setter and getter functions
// const person={
//   name : 'Saad',
//   age : '18',
//   get fullDetail(){
//     return `name:${name} age:${age}`
//   },
//   set fullDetail(value){
//     const parts =value.split(' ')
//     this.name = parts [0]
//     this.age = parts [1]
//   }
  
// }
// person.fullDetail = 'Anus 23'
// console.log(person)

// function createMultiplier(multiplyBy) {
//   return function (num) {
//     return num * multiplyBy;
//   };
//   }

// let multiplier=createMultiplier(4)
// console.log(multiplier(5))
//https:medium.com/@telosrelated/higher-order-functions-hof-56d496df837a//fpr further explanation
// use the createMultiplier function to create a multiplier for numbers 4 and 5

// create an object and convert it into string and then convert it back to object using json stringify and parse functions
// const person =[
//   {
//     name:'Saad Ali Khan',
//     Id: 481,
//     isAlive:true
//   },
//   {
//     name:'Muzammil Ali Khan',
//     Id: 567,
//     isAlive:true
//   },
//   {
//     name:'Anus Ali Khan',
//     Id: 726,
//     isAlive:true
//   }
// ]
// console.log(person)

// const peoples = JSON.stringify(person)
// console.log(peoples)

// console.log(JSON.parse(peoples))