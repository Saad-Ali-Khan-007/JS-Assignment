// Use the tag based selector to select the button
const btn =document.getElementsByTagName("button")
console.log(btn)
// use the id based selector to select the div with id = special
const div = document.getElementById('special')
console.log(div)
// use the class based selector to select the paragraphs with the class = para
const para = document.getElementsByClassName('para')
console.log(para)
// use the query based selector to select all the elements that have an attribute named 'custom' and its value is set to 'selectable' (hint: revise css attribute based selectors)
const custom = document.querySelectorAll("p[custom='selectable']")
console.log(custom)