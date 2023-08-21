import React, { useEffect, useState } from 'react';

const FavCard = ({ image, title, usedIngredients, missedIngredients }) => {
  let arr = [],
    arr2 = [];
  usedIngredients.forEach((el) => {
    arr.push(<li key={el}>{el}</li>);
  });
  missedIngredients.forEach((el) => {
    arr2.push(<li key={el}>{el}</li>);
  });

  const removeFromFavorite = async () => {
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
      const response = await fetch('/removeFavorite', options);
      // const result = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <img src={image}></img>
      <p>{title}</p>
      <p>Used ingredients:</p>
      <ul>{arr}</ul>
      <p>Missed ingredients:</p>
      <ul>{arr2}</ul>
      <input
        type="submit"
        name="removeFromFavorites"
        value="Remove from Favorites"
        onClick={removeFromFavorite}
      ></input>
      <br />
    </div>
  );
};

const styles = {
  container: {
    // display: 'flex',
    // wrap: 'wrap',
    border: '1px solid black',
    // height: '50%',
    // width: '50%',
  },
  body: {},
};

export default FavCard;
