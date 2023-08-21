import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const User = require('../../server/models/userModel.js');


//usernames: user1, user2, user3
//passwords: password (for all three users)
const Login = () => {
    const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(false);

  const handleSubmit = (e) => {
    //preventDefault = prevents default behavior of refreshing page after password is entered
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
          if (data === true) {
            setauthenticated(true)
            // localStorage.setItem("authenticated", true);
            // react navigate to /Home
            navigate("/Welcome");
        }
        })

      } catch (error) {
        console.error(error);
    }
    
    //check user info in database, if verified, set authentication to true in localStorage
  };

  return (
    <div id = "login">
      <p>Welcome. Please login to continue.</p>
      <form onSubmit={handleSubmit}>
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