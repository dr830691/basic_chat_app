import React, { useState } from 'react';
import {signup} from '../helpers/auth.js';
import {useHistory} from 'react-router-dom';
import { Redirect } from 'react-router';
import { registerUsersForChat } from '../helpers/db.js';

function Signup(props) {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const [error,setError]=useState("");
    const history =useHistory();


    const handleSubmit= async()=>{
       try
       {let user=await signup(email,password);
        console.log("Signup Success ",user)
        history.push('/signin');
        registerUsersForChat(name,email);
       }
       catch(error){setError(error);
        console.log(error);
        console.log("hi this is an error");}
       
    }
    if(localStorage.getItem("userInfo")){
        return <Redirect to='/chat'/>;
        }
    return (
       
        <div> 
            {error? <h3>This is an error</h3>:
            <div className="signnup">
            <div className="name">
             <label>Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="email">
              <label>Email</label>
              <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="email">
              <label>Password</label>
              <input type="text" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button onClick={handleSubmit}>Signup</button>
        </div>}
            
            
        </div>
    );
}

export default Signup;