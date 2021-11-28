import React, { useState } from 'react';
import signin from '../helpers/auth.js';

function Login(props) {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    return (
        <div> 
            <div>
                <label>Email</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)}></input>
                <label>Password</label>
                <input type="password" onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <button>Login</button>
        </div>
    );
}

export default Login;