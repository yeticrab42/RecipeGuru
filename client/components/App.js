import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import Sports from './Sports';
import Home from './Home';


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
          <Route path="sports" element={<Sports />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
