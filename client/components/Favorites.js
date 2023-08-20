import React, { useState } from "react";
import Card from './Card';

const Favorites = () => {
    const [resultArr, setArr] = useState([]);

    const mealSearch = async () => {
        const str = ingredients.replaceAll(',','%2C')
        
        let backendUrl; //endpoint of the expressfile

        try {
            const response = await fetch(backendUrl);
            const result = await response.json(); //parsing from json file
            setArr([...result]);
  
            console.log(result);
    
        } catch (error) {
            console.error(error);
        }
   
    }

    let outputresult = [];
    outputresult = resultArr.map( (el) => {
        const arr =[], arr2=[]
    
        //lines 9-14 can be different, but it will still be passed down this way
        for(let i = 0; i < el.usedIngredients.length; i++){
          arr.push(el.usedIngredients[i])
        }
        for(let i = 0; i < el.missedIngredients.length; i++){
          arr2.push(el.missedIngredients[i])
        }
        return <Card key={`card${resultArr.indexOf(el)}`} image={el.image} title={el.title} usedIngredients={arr} missedIngredients={arr2}/>;
      })

    return (
        <div>
            <h1>List of Favorite Recipes</h1>
            {outputresult}
        </div>   
    )
};
  
export default Favorites;