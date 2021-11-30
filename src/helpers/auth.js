// import React from 'react';
import { auth } from '../firebase';

export async function signup(email,password) {
    console.log("email ",email,"password",password); 
    return (
        auth.createUserWithEmailAndPassword(email,password)
    );
}
export function signin(email,password){
    
    return auth.signInWithEmailAndPassword(email,password);
}
export function logout(){
    localStorage.removeItem("userInfo");
   return auth.signOut;
}

