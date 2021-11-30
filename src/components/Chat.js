import React, { useEffect } from 'react';
import {logout} from '../helpers/auth';
import { useHistory } from 'react-router';
import { useState } from 'react/cjs/react.development';
import { database } from '../firebase';
import ChatBox from './ChatBox';

function Chat(props) {
    
    const [name,setName]=useState("");
    const [user,setuser] =useState([]);
    const [showChatBox,setShowChatBox]=useState(false);
    const [messages,setMessages]=useState([]);
    // let temp="";
    useEffect(
        ()=>{setName(localStorage.getItem("userInfo"))},
        []);
    console.log("user Name",name);
    
   const history=useHistory();
   const handleSubmit=()=>{
        logout();
        history.push('/');
        localStorage.removeItem("userInfo");
        }

    const readAllUsers= ()=>{
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

    }
    const readAllMessages=()=>{
        database.ref('messages').on('value',(snapshot=>{
            let message=[];
            snapshot.forEach((snap)=>{
                let singleMessage=snap.val();
                message.push(singleMessage);
            })
            console.log("messages",message);
            setMessages(message);
        }))
    }
        useEffect(()=>{
        readAllUsers();
        readAllMessages();}
            ,);
        const handleShowChatBox=()=>{
            setShowChatBox(true);
        }
            
                
    return (
        <div>
            <h2>Hi {name},Let's Chat with the open universe</h2>
            <button onClick={handleSubmit}> signout</button>
            <button onClick={handleShowChatBox}>Let's Chat</button>
            <div className="all-users" >
                <h4>Available users</h4>
                {user.map((user)=>
                <div className={user.name}>
                <ol><b>{user.name}</b></ol>
               </ div>)
                }
            </div>
            {
                showChatBox && <ChatBox messages={messages}/>
            }
        </div>
    );
}

export default Chat;