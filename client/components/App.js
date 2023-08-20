import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
//import Sports from './Favorites';
import Home from './Home';
import Favorites from './Favorites';


// const NavBar = () => {
//     return (
//         <>
//           <nav>
//             <ul>
//                 <h1>yeti crab</h1>
//               {/* <li>
//                 <Link to="/" element={<Home />}>Home</Link>
//               </li>
//               <li>
//                 <Link to="/blogs" element={<Blogs />}>Blogs</Link> */}
//               {/* </li> */}
//               {/* <li>
//                 <Link to="/contact">Contact</Link>
//               </li> */}
//             </ul>
//           </nav>
    
//         </>
//       )
  
// }

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
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
