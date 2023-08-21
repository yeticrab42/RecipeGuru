import React, { useState, useEffect } from 'react';
import FavCard from './FavCard';

const Favorites = () => {
  const [resultArr, setArr] = useState([]);

  useEffect(() => {
    fetch('/getFavorite')
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setArr(data);
      });
  }, []);

  let outputresult = [];
  outputresult = resultArr.map((el) => {
    const arr = [],
      arr2 = [];

    //lines 9-14 can be different, but it will still be passed down this way
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
    <div className='home'>
      <h1>List of Favorite Recipes</h1>
      <p>
        {' '}
        Once you click "Remove from Favorites," navigate away then click on "My
        Favorites" in the navigation bar again to get an updated list of
        favorites.
      </p>
      <div className='result'>{outputresult}</div>
    </div>
  );
};

export default Favorites;
