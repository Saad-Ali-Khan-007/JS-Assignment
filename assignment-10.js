// Create a new promise which will resolve after 5 seconds with a string value
// function getString(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let output = 'Hey I am Saad Ali Khan'
//             const error = false
//             if(!error){
//                 resolve()
//             }else{
//                 reject('Error: Something went wrong')
//             }
//             document.body.innerHTML=output
//         },5000)
//     })
// }
console.log(getString())
// Create a new promise which will be rejected after 3 seconds with a new Error
function getString(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let output = 'Hey I am Saad Ali Khan'
            const error = true
            if(!error){
                resolve()
            }else{
                reject('Error: Something went wrong')
            }
            document.body.innerHTML=output
        },3000)
    })
}
// Also write the code to handle and print the values after completion of the promises created above
getString().then().catch(error=>console.log(error))

