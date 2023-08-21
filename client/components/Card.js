import React from 'react';

import '../scss/cards.scss';

const Card = ({ image, title, usedIngredients, missedIngredients }) => {
  let arr = [],
    arr2 = [];
  usedIngredients.forEach((el) => {
    arr.push(<li key={el}>{el}</li>);
  });
  missedIngredients.forEach((el) => {
    arr2.push(<li key={el}>{el}</li>);
  });
  // return (
  //   <div style={styles.container}>
  //     <img src={image} {...styles.img}></img>
  //     <p id='title'>{title}</p>

  //     <p>Used ingredients:</p>
  //     <ul>{arr}</ul>
  //     <p>Missed ingredients:</p>
  //     <ul>{arr2}</ul>
  //     <input
  //       type='submit'
  //       name='addToFavorites'
  //       value='Add To Favorites'
  //     ></input>
  //     <br />
  //   </div>
  // );
  return (
    <div className='recipeCards'>
      <img src={image} className='image'></img>
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
      ></input>
      <br />
    </div>
  );
};

// const styles = {
//   container: {
//     alignSelf: 'center',
//     // shadowColor: 'f4a259',
//     // shadowOpacity: 0.5,
//     // shadowRadius: 2,
//     backgroundColor: 'FEFAE0',
//     // display: 'flex',
//     // wrap: 'wrap',
//     border: '1px solid black',
//     // height: '50%',
//     // width: '50%',
//     // boxShadow: '10px 5px 5px f4a259',
//     // justifyContent: 'space-between',
//   },
//   input: {
//     boxShadow: '10px 5px 5px f4a259',
//     alignSelf: 'center',
//   },
//   img: {
//     display: 'flex',
//     alignSelf: 'center',
//   },
// };

export default Card;
