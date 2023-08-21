import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const User = require('../../server/models/userModel.js');



const Login = () => {
    const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));

  const handleSubmit = (e) => {
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
        fetch('/api/login', options).then(response => {return response.json()}).then(data => {
          console.log(data)
          if (data === true) {
            setauthenticated(true)
            localStorage.setItem("authenticated", true);
            // react navigate to /Home
            navigate("/Welcome");
        }
        })
        // const response = await fetch('/api/login', options)
        // const data = response.json()
      } catch (error) {
        console.error(error);
    }
    
    //check user info in database, if verified, set authentication to true in localStorage
  };

  return (
    <div>
      <p>Welcome. Please login to continue.</p>
      <form id = "login" onSubmit={handleSubmit}>
      <input
        placeholder="username"
        type="text"
        name="Username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      <br/>
      <input
        placeholder="password"
        type="password"
        name="Password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <input id="submit" type="submit" value="Log In" />
      </form>
    </div>
  )
};


export default Login;