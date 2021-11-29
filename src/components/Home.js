
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

function Home(props) {
    if(localStorage.getItem("userInfo")){
        return <Redirect to='/chat'/>;
        }
    return (
        <div>
           <div className="App-logo"></div>
        
           <h2>Welcome to the Q chat App Let's Connect the Universe</h2>
           <div className="signup-btn">
               <Link to='/signup'>
               <button> Signup</button>
               </Link>
               <Link to='/signin'>
               <button> Signin</button>
               </Link>


           </div>
        
        </div>
    );
}

export default Home;