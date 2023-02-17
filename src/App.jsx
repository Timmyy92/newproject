import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Service from './components/pages/Service';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/services' element={<Service />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
