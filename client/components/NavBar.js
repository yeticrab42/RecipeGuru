import React, { BrowserRouter, Routes, Route } from 'react';
import { Outlet, Link } from 'react-router-dom';
// import Home from './Home';
// import Favorites from './Favorites';

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Welcome">Home</Link>
          </li>
          <li>
            <Link to="/Welcome/recipes">Recipes by Ingredients</Link>
          </li>
          <li>
            <Link to="/Welcome/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default NavBar;
