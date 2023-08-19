import React from "react";

const Card = ({image, title, usedIngredients}) => {
    // const {image, title, usedIngredients} = props
    let arr = []
     usedIngredients.forEach(el => {
        arr.push(<p key={el}>{el}</p>)
    })
    return (
        <div style={styles.container}>
            <img src={image}></img>
            <p>{title}</p>
            <p>Used ingredients:</p>
                
            {arr}
            <br/>
        </div>
    )
  };
  
  const styles = {
    container: {
      border: '1px solid black',
      height: '50%',
      width: '50%',
      flex: 1,
    },
  };

export default Card;