import React from 'react';

const FavCard = ({ image, title, usedIngredients, missedIngredients }) => {
  console.log(image, title, usedIngredients, missedIngredients);
  let arr = [],
    arr2 = [];
  usedIngredients.forEach((el) => {
    arr.push(<li key={el}>{el}</li>);
  });
  missedIngredients.forEach((el) => {
    arr2.push(<li key={el}>{el}</li>);
  });


  return (
    <div style={styles.container}>
      <img src={image}></img>
      <p>{title}</p>
      <p>Used ingredients:</p>
      <ul>{arr}</ul>
      <p>Missed ingredients:</p>
      <ul>{arr2}</ul>
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