import React, { useState } from 'react';
import { redirect } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    
    //how will this be added to our database
    async function signupUser() {
        return fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({username: username, password: password})
        })
          .then(data => console.log(data.json()))
          .catch()
    }
    
    return(
        <div class = 'signup' >
           <h1>Signup</h1>
           <form>
            <label>
                <p>Username</p>
                <input type='text' onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                <p>Password</p>
                <input type='text' onChange={e => setPassword(e.target.value)} />
            </label>
           </form>
            <div>
                <button type = "submit" onclick={signupUser}>Submit</button>
            </div>
        </div>
    )

}

export default Signup;