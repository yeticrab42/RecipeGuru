import React from 'react';

const Card = ({ image, title, usedIngredients, missedIngredients }) => {
  let arr = [],
    arr2 = [];
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
    console.log(options);
    try {
      const response = await fetch('/addFavorite', options);
      // const result = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // <div style={styles.container}>
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

// const styles = {
//   container: {
//     // display: 'flex',
//     // wrap: 'wrap',
//     border: '1px solid black',
//     // height: '50%',
//     // width: '50%',
//   },
//   body: {},
// };

export default Card;
