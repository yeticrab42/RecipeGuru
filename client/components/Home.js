import React, { useState } from "react";

// fetch('')
// .then

// const fetchedurl = [{"id":"30e317800515c33d2635df2d05a6d14d",
// "sport_key":"americanfootball_nfl",
// "sport_title":"NFL",
// "commence_time":"2023-09-17T17:00:00Z",
// "home_team":"Detroit Lions","away_team":"Seattle Seahawks",
// "bookmakers":[{"key":"draftkings","title":"DraftKings","last_update":"2023-08-18T21:10:55Z","markets":[{"key":"h2h","last_update":"2023-08-18T21:10:54Z","outcomes":[{"name":"Detroit Lions","price":-142}]


/*
const url =
  'https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?regions=us&oddsFormat=american&apiKey=5ceea3471844b9630e2d8855da451157';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5ceea3471844b9630e2d8855da451157',
    'X-RapidAPI-Host': 'odds.p.rapidapi.com',
  },
};

fetch(url, options).then((response) => {
  response.text().then((result) => {
    console.log(result);
  });
});
*/

const Home = () => {
    const [ingredients, setIngredients] = useState('');

    const sportsChoice = async () => {
      //console.log(36, e.target.value)
      console.log('37', ingredients);
      const str = ingredients.replaceAll(',','%2C')
      console.log(39, str)
      // convert 'hello,hi,world' to 'hellow%2Chi%2Cworld'

const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=cheese%2Ctomato&number=5&ignorePantry=true&ranking=1'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0639d24871msh1fbe0397c1436dfp164bc9jsn14ba5473c4cf',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
    }
    // sportsChoice = menu.value

    
    return (
        <div>
            <h1>Home</h1>
             <label htmlFor="menu">Type in your ingredients:</label>
             <p>Make sure to separate your ingredients with a comma.</p>
             <input type="text" id="ingredients" name="ingredients" onChange={(e) => setIngredients(e.target.value)}></input>
             <input type="submit" name="generateRecipes" onClick={sportsChoice}></input>
        </div>   
    )
}

export default Home;