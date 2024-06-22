// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import './App.css'
import Navigation from './Components/Navigation';
import Home from './Views/Home';
import Projects from './Views/Projects';
import Experience from './Views/Experience';
import Contact from './Views/Contact';
import Footer from "./Components/Footer";

function App() {
  

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
    
  )
}

export default App
