// You have to use the following api
const URI = "https://restcountries.eu/rest/v2/all";
fetch('https://restcountries.com/v3.1/all')
.then((res)=>res.json())
.then((data)=>
    {
        const card = document.getElementById('card') 
 card.textContent =data
    })
  
// fetch the data and create cards and show some details about the countries that is coming from the api on the cards in html (you can choose the details what you want to show by yourself, atleast include 2 to 3 properties about that country)
