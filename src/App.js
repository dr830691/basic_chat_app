
import './App.css';
import Signup from './components/Signup';
import Login from './components/login';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Signup></Signup>

    </div>
  );
}

export default App;
