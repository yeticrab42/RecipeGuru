import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const User = require('../../server/models/userModel.js');



const Login = () => {
    const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password
        }),
      };
      try {
        const response = await fetch('/api/login', options);
        if (response) {
            setauthenticated(true)
            localStorage.setItem("authenticated", true);
            // react navigate to /Home
            navigate("/Welcome");
        }
      } catch (error) {
        console.error(error);
    }
    
    //check user info in database, if verified, set authentication to true in localStorage
  };

  return (
    <div>
      <p>Welcome. Please login to continue.</p>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      <input
        type="password"
        name="Password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <input type="submit" value="Submit" />
      </form>
    </div>
  )
};


export default Login;