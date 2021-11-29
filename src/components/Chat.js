import React, { useEffect } from 'react';
import {logout} from '../helpers/auth';
import { useHistory } from 'react-router';
import { useState } from 'react/cjs/react.development';


function Chat(props) {
    console.log(localStorage.getItem("userInfo"));
    const [name,setName]=useState("");
    useEffect(()=>{setName(localStorage.getItem("userInfo"));},[]);
    
   const history=useHistory();
   const handleSubmit=()=>{
        logout();
        history.push('/');
        localStorage.removeItem("userInfo");
        }
    return (
        <div>
            <h2>Hi {name},Let's Chat with the open universe</h2>
            <button onClick={handleSubmit}> signout</button>
        </div>
    );
}

export default Chat;