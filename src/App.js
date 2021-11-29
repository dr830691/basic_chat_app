
import './App.css';
import Chat from './components/Chat';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from  './components/Home';
import FourOfour from './components/FourOfour';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import pic from '../src/components/pic.jpg';
import { auth } from 'firebase';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';
function App() {
     const [currentUser,setCurrentUser]=useState({});
     useEffect( ()=>{
       let user=auth.currentUser;
       setCurrentUser(user);   
     }
       ,[]
     );
     
     console.log("user ",currentUser,"  is logged in");
     const userEmail=localStorage.getItem("userInfo");
     console.log(userEmail);

     function PrivateRoute({Component,props,path}){
       return(
       <Route path={path}
       render={
         (props)=>userEmail?<Component {...props}/>:<Redirect to='/signin'/>
         }
         />)
        }


  return (
    <div className="App">
      <h1>Hello World</h1>
      <Router>
        <Navbar pic={pic}/>
        <Switch>
         <Route path="/" exact component={Home}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/signin" exact component={Login}/>
        <PrivateRoute path="/chat" Component={Chat}/>
        <Route  component={FourOfour}/>
        
       
       </Switch>
      </Router>

    </div>
  );
}

export default App;
