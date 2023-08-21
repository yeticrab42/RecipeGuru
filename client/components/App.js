import React from 'react'
import { Routes, Route} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Favorites from './Favorites';
import Login from './Login';
import WoNavBar from './WoNavBar';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WoNavBar />}>
          <Route index element={<Login />} />
      </Route>
      <Route path="/Welcome" element={<NavBar />}> 
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
