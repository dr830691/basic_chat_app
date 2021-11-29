import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    const [name,setName]=useState("");
    const {pic} =props;
    
    const updateName=()=>{
        const user =localStorage.getItem("userInfo");
        setName(user);
    }
    return (
        <div>
            <div className='container'>
              <Link to='/'> <h2> Q-Chat App</h2></Link>
                <div>

                    <div>
                        <h4>{name}</h4>
                        <button onClick={updateName}>Update Name</button>
                    </div>
                </div>
            </div>
            <img  src={pic}></img>

        </div>
    );
}

export default Navbar;