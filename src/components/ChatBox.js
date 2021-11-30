// import React from 'react';
import { useState } from 'react/cjs/react.development';
import { writeMessage } from '../helpers/db';


function ChatBox(props) {
    const {messages}=props;
    const [msg,setmessage]=useState("");
    const email=localStorage.getItem("userInfo");
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        writeMessage(msg,email);
        setmessage("");
        
    }
    const findUser=(msg)=>localStorage.getItem("userInfo")===msg.userInfo?"right":"left";
    return (
        <div className="chatBox">
            {
                messages&& messages.map((msg)=>
                <li className={findUser(msg)} >{msg.content}</li>)
            }
            <form onSubmit={handleOnSubmit}>  
                <input  value={msg} onChange={(e)=>setmessage(e.target.value)}/>
                <button type="submit">Send</button>
            </form>
        </div>
       
    );
}

export default ChatBox;