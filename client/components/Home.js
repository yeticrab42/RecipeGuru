import React, { useEffect, useState } from 'react';
import Card from './Card';

const Home = (props) => {
  const [ingredients, setIngredients] = useState('');
  const [resultArr, setArr] = useState([]);

  const mealSearch = async () => {
    const str = ingredients.replaceAll(',', '%2C');

    const url =
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
      <div id='1'>
        {/* <div> */}
        <h1>Welcome To Recipe Generator</h1>
        <label htmlFor='menu'>Type in your ingredients:</label>
        <p>Make sure to separate your ingredients with a comma.</p>
        <input
          type='text'
          id='ingredients'
          name='ingredients'
          onChange={(e) => setIngredients(e.target.value)}
        ></input>
        <input
          type='submit'
          name='generateRecipes'
          onClick={mealSearch}
        ></input>
      </div>
      <div id='2' class='result'>
        {outputresult}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
