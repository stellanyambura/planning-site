import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from "./components/pages/About";
import LandingPage from "./components/pages/landingpage/LandingPage"
import Services from './components/pages/Services';
import CompanyInfor from './components/pages/CompanyInfor';
import Approach from './components/pages/Approach';
import './App.css'; 

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/approach' element={<Approach/>} />
          <Route path="/companyinfor" element={<CompanyInfor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
