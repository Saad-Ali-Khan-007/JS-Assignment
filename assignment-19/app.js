// create a basic form in html which takes user's name, age, email, password and submits it
// - Clear the form after submission
// - Store the data submitted by the user in localStorage
function clicked(){
    const user = document.getElementById('text').value
    const age = document.getElementById('number').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    
    let u = localStorage.setItem('user',user)
    let a = localStorage.setItem('age',age)
    let e = localStorage.setItem('email',email)
    let p = localStorage.setItem('password',password)
}