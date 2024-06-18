// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import './App.css'
import Navigation from './Components/Navigation';
import Home from './Views/Home';
import Footer from "./Components/Footer";

function App() {
  

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
    
  )
}

export default App
