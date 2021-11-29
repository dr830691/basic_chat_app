import React, { useState } from 'react';
import {signin} from '../helpers/auth.js';
import { useHistory } from 'react-router';
import { Redirect } from 'react-router';

function   Signin(props) {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState({});
    // const [error,setError]=useState(null);
    const history=useHistory();
    const handleSubmit= async ()=>{
        // console.log("inside Login",email,password);
        try{
            let user=await signin(email,password);
            console.log(user.user.email,"Log  in succesfully");
            localStorage.setItem("userInfo",user.user.email);
            history.push('/chat');
        }
        catch(error){
            console.log(error);
            setError(error);
        }
        
    }
    if(localStorage.getItem("userInfo")){
        return <Redirect to='/chat'/>;
        }
    
    return (
            <div>
               <h4>{error?.message}</h4>
            <div className="signin">
                {/* <div className="name">
                 <label>Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)}/>
                </div> */}
                <div className="email">
                <label>Email</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="email" >
                <label>Password</label>
                <input type="text" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
            
            <button onClick={handleSubmit}>Signin</button>
            </div>
        </div>
    );
}

export default Signin;