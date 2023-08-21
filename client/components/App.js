import React from 'react'
import { Routes, Route} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Favorites from './Favorites';
import Login from './Login';
import WoNavBar from './WoNavBar';
import Recipes from './Recipes'

const App = () => {
  return (
    <Routes>
      {/* Initial route for log-in Login.js will navigate to secondary route*/}
      <Route path="/" element={<WoNavBar />}>
          <Route index element={<Login />} />
      </Route>
      {/* Secondary route(NavBar file has the links to Home.js/Recipes.js/favorites.js) */}
      <Route path="/Welcome" element={<NavBar />}> 
          <Route index element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
};

export default App;
