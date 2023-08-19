import React, { BrowserRouter, Routes, Route } from 'react';
import { Outlet, Link } from "react-router-dom";
import Home from './Home';
import Sports from './Sports';

const NavBar = () => {
    return (
      <>
      <nav>
        <ul>
          
            <label htmlFor="bankroll">Bankroll:</label>
          
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sports">Sports</Link>
          </li>
          {/* <li>
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
      </nav>

      <Outlet />
      </>
    )
  
}

export default NavBar;