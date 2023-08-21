import React from 'react';

const Card = ({ image, title, usedIngredients, missedIngredients }) => {
  let arr = [],
    arr2 = [];
    //API returned used & missed ingredients and as array
  usedIngredients.forEach((el) => {
    arr.push(<li key={el}>{el}</li>);
  });
  missedIngredients.forEach((el) => {
    arr2.push(<li key={el}>{el}</li>);
  });

  const addToFavorite = async () => {
    console.log('clicked button');
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image,
        title,
        usedIngredients,
        missedIngredients,
      }),
    };
    try {
      const response = await fetch('/addFavorite', options);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='recipeCards'>
      <img className='image' src={image}></img>
      <p id='title'>{title}</p>
      <p>Used ingredients:</p>
      <ul>{arr}</ul>
      <p>Missed ingredients:</p>
      <ul>{arr2}</ul>
      <input
        id='submit'
        type='submit'
        name='addToFavorites'
        value='Add To Favorites'
        onClick={addToFavorite}
      ></input>
      <br />
    </div>
  );
};

export default Card;
