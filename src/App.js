import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from "./components/pages/About";
import LandingPage from "./components/pages/landingpage/LandingPage"
import Services from './components/pages/Services';
import HomePage from './components/pages/HomePage';
import Aproach from './components/pages/Aproach';
import './App.css'; 

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/aproach' element={<Aproach/>} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
