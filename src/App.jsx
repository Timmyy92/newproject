import React from 'react'; 
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Router> 
        <Navbar />
       
        <Route path='/' exact component={Home}></Route>
      
      </Router>
      
    </>
  );
}

export default App;
