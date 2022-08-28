import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <Router>
        
        

        <Routes>
          <Route exact path='/' element={<Home />} ></Route>
          <Route exact path='/login' element={<Login />} ></Route>
          <Route exact path='/signup' element={<Signup />} ></Route>
          <Route exact path='/dashboard' element={<Dashboard />} ></Route>
        </Routes>
      
      </Router>
  );
}

export default App;
