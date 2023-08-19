import React, { useEffect, useState } from "react";
import Card from './Card';

// fetch('')
// .then

// const fetchedurl = [{"id":"30e317800515c33d2635df2d05a6d14d",
// "sport_key":"americanfootball_nfl",
// "sport_title":"NFL",
// "commence_time":"2023-09-17T17:00:00Z",
// "home_team":"Detroit Lions","away_team":"Seattle Seahawks",
// "bookmakers":[{"key":"draftkings","title":"DraftKings","last_update":"2023-08-18T21:10:55Z","markets":[{"key":"h2h","last_update":"2023-08-18T21:10:54Z","outcomes":[{"name":"Detroit Lions","price":-142}]


/*
const url =
  'https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?regions=us&oddsFormat=american&apiKey=5ceea3471844b9630e2d8855da451157';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5ceea3471844b9630e2d8855da451157',
    'X-RapidAPI-Host': 'odds.p.rapidapi.com',
  },
};

fetch(url, options).then((response) => {
  response.text().then((result) => {
    console.log(result);
  });
});
*/

const Home = (props) => {
    const [ingredients, setIngredients] = useState('');
    // const [image, setImage] = useState([]);
    // const [title, setTitle] = useState([]);
    const [resultArr, setArr] = useState([]);
    //const [usedIngredients, setUsedIngredients] = useState(['','','','','']);
    // const [isShown, setIsShown] = useState('false');
    // const [outputresult, setOutput] = useState([]);


    // setImage([])
    const sportsChoice = async () => {
      const str = ingredients.replaceAll(',','%2C')
      // convert 'hello,hi,world' to 'hellow%2Chi%2Cworld'

const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=c'+str+'&number=5&ignorePantry=true&ranking=1'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0639d24871msh1fbe0397c1436dfp164bc9jsn14ba5473c4cf',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};
// declare an array const to store upcoming data from ingredients api

try {
	const response = await fetch(url, options);
	const result = await response.json();
    setArr([...result]);

  // const arr =[], arr2=[]
  // const cardsArr =[]
  // for (let i = 0; i < result.length; i++){
    // setImage(result[i].image)
    // setTitle(result[i].title)
    // setUsedIngredients(result[i].usedIngredients)
    // cardsArr.push(<Card id={`card${i}`} image={result[i].image} title={result[i].title}/>)
    // imageArr.push(result[i].image)
    
    // arr.push(result[i].image)
    // arr2.push(result[i].title)

  // }
  // setImage([...arr]);
  // setTitle([...arr2])
  // setArr([...cardsArr])
	console.log(result);
  // console.log(setOutput(...arr))
  
} catch (error) {
	console.error(error);
}
  
  

//   const feedItem = urls.map((url, i) => {
//     //unique key={`item-${i}`}
//     return <FeedItem className="img" key={`item-${i}`} src={url} />;
//   });
//   //create a div with the id of feed and pass in the tempArr
//   return (
//     <div id="feed" style={styles.container}>
//       {feedItem}
//     </div>
//   );
// };
  

  
    //console.log('outside', outputresult)
    //setIsShown('true')
}
    // sportsChoice = menu.value
    
  // useEffect(()=> {
  //   console.log('inside useEffect')
  //   // setIsShown('')
  // },[ingredients])
  let outputresult = [];

  outputresult = resultArr.map( (el, i) => {
    const arr =[]
    for(let i = 0; i < el.usedIngredients.length; i++){
      arr.push(el.usedIngredients[i].original)
    }
    return <Card key={`card${resultArr.indexOf(el)}`} image={el.image} title={el.title} usedIngredients={arr}/>;
  })
    return (
        <div>
            <h1>Home</h1>
             <label htmlFor="menu">Type in your ingredients:</label>
             <p>Make sure to separate your ingredients with a comma.</p>
             <input type="text" id="ingredients" name="ingredients" onChange={(e) => setIngredients(e.target.value)}></input>
             <input type="submit" name="generateRecipes" onClick={sportsChoice}></input>

           {/* <card> title={title} original={orignal} <card/> */}
           {/* <Card image={image[0]} title={title[0]}/>
           <Card image={image[1]} title={title[1]}/>
           <Card image={image[2]} title={title[2]}/>
           <Card image={image[3]} title={title[3]}/>
           <Card image={image[4]} title={title[4]}/> */}
            
           {outputresult}
        </div>   
    )
}

export default Home;