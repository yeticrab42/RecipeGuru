import React, { useState, useEffect } from 'react';
import FavCard from './FavCard';

const Favorites = () => {
  const [resultArr, setArr] = useState([]);

  useEffect(() => {
    fetch('/getFavorite')
      .then((data) => data.json())
      .then((data) => {
        //setArr is a setterfunction, only way to update state
        setArr(data);
      });
      //[] dependency runs once upon initial render
  }, []);

  let outputresult = [];
  outputresult = resultArr.map((el) => {
    const arr = [],
      arr2 = [];

    for (let i = 0; i < el.usedIngredients.length; i++) {
      arr.push(el.usedIngredients[i]);
    }
    for (let i = 0; i < el.missedIngredients.length; i++) {
      arr2.push(el.missedIngredients[i]);
    }
    return (
      <FavCard
        key={`card${resultArr.indexOf(el)}`}
        image={el.image}
        title={el.title}
        usedIngredients={arr}
        missedIngredients={arr2}
      />
    );
  });

  return (
    //renders to page
    <div className='home'>
      <h1>List of Favorite Recipes</h1>
      <p> See all your favorited recipes here!</p>
      <div className='result'>{outputresult}</div>
    </div>
  );
};

export default Favorites;
