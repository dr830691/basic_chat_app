import React, { useState } from 'react';
import signup from '../helpers/auth.js';

function Signup(props) {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const handleSubmit=(email,password)=>{

    }
    return (
        <div> 
            <div>
            <label>Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)}></input>
                <label>Email</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)}></input>
                <label>Password</label>
                <input type="password" onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <button>Signup</button>
        </div>
    );
}

export default Signup;