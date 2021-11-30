import React, { useEffect } from 'react';
import {logout} from '../helpers/auth';
import { useHistory } from 'react-router';
import { useState } from 'react/cjs/react.development';
import { database } from '../firebase';

function Chat(props) {
    
    const [name,setName]=useState("");
    const [user,setuser] =useState([]);
    useEffect(
        ()=>{setName(localStorage.getItem("userInfo"))},
        "");
    console.log("user Name",name);
    
   const history=useHistory();
   const handleSubmit=()=>{
        logout();
        history.push('/');
        localStorage.removeItem("userInfo");
        }
        useEffect(
            ()=>{
                database.ref("user").on(
                    "value",(snaps)=>
                    {
                        let users=[];
                snaps.forEach((snap)=>{
                    const user=snap.val();
                    users.push({
                        name:user.name,
                        email:user.email});
                });
                setuser(users);
                });
                
                console.log("user is a ",user);

        },[]);
            
                
    return (
        <div>
            <h2>Hi {name},Let's Chat with the open universe</h2>
            <button onClick={handleSubmit}> signout</button>
            <div className="all-users" style={{border:"2px solid green",width:"100px",marginTop:"10 px",padding:"10px"}}>
                <h4>Available users</h4>
                {user.map((user)=>
                <li>{user.name}</li>)
                }
            </div>
        </div>
    );
}

export default Chat;