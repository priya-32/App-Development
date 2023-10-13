import './App.css';
import Home from './Components/Home';
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import ScrollToTopButton from './Components/ScrollToTopButton';
import {Routes, Route } from "react-router-dom"
function App() {
  
  return (
    <div className="App">
      <Routes>
      < Route path = "/" element = {<Home/>}/>
      </Routes>
      <ScrollToTopButton/>
     
    </div>
  );
}

export default App;
