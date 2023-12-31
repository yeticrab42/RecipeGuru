import React, { useEffect, useState } from 'react';
import Card from './Card';

const Recipes = (props) => {
  const [ingredients, setIngredients] = useState('');
  const [resultArr, setArr] = useState([]);

  const mealSearch = async () => {
    //str will take the user's input and change it into the correct format for the url
    const str = ingredients.replaceAll(',', '%2C');

    const url =
    //str in added into the correct place in the url for the approiate url for the search
      'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=c' +
      str +
      '&number=9&ignorePantry=true&ranking=1';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0639d24871msh1fbe0397c1436dfp164bc9jsn14ba5473c4cf',
        'X-RapidAPI-Host':
          'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      },
    };

    try {
      //fetch request to the API
      const response = await fetch(url, options);
      const result = await response.json();
      setArr([...result]);

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  let outputresult = [];

  outputresult = resultArr.map((el, i) => {
    const arr = [],
      arr2 = [];
    for (let i = 0; i < el.usedIngredients.length; i++) {
      arr.push(el.usedIngredients[i].original);
    }
    for (let i = 0; i < el.missedIngredients.length; i++) {
      arr2.push(el.missedIngredients[i].original);
    }
    return (
      //Card component
      <Card
        key={`card${resultArr.indexOf(el)}`}
        image={el.image}
        title={el.title}
        usedIngredients={arr}
        missedIngredients={arr2}
      />
    );
  });
  return (
    <div class='home'>
      <h1>Find Recipes</h1>
      <label htmlFor='menu'>Type in your ingredients:</label>
      <p>Make sure to separate your ingredients with a comma.</p>
      <input
        type='text'
        id='submit'
        name='ingredients'
        onChange={(e) => setIngredients(e.target.value)}
      ></input>
      <input
        id='submit'
        type='submit'
        name='generateRecipes'
        onClick={mealSearch}
      ></input>

      <div class='result'>{outputresult}</div>
    </div>
  );
};

export default Recipes;
