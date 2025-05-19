import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Project from './project';
import Signup from './signup';
import Skill from './Skill';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/skill" element={<Skill />} />
      </Routes>
    </>
  );
}

export default App;