import React, { BrowserRouter, Routes, Route } from 'react';
import { Outlet, Link } from 'react-router-dom';
// import Home from './Home';
// import Favorites from './Favorites';

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          {/* <label htmlFor="bankroll">Bankroll:</label> */}

          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/favorites'>Favorites</Link>
          </li>
          {/* <li>
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default NavBar;
