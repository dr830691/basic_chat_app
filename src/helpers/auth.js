import React from 'react';
import { auth } from '../firebase';

export function signup(props) {
    return (
        auth().createUserWithEmailAndPPassword(email,password)
        
    );
}
export function signin(email,password){
    return auth().signInWithEmailAndPassword(email,password);
}
export function logout(){
    return auth().signout();
}

