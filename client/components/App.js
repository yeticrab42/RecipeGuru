import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import Recipes from './Recipes';
import Home from './Home';
import Favorites from './Favorites';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="favorites" element={<Favorites />} />
        {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
