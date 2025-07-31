import React from 'react';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Team from './pages/Team'
import Home from './pages/Home'
import Students from './pages/Students'
import Clients from './pages/Clients';
import Contact from './pages/Contact';

function App() {

  return (
    <Router>
      <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/people" element={<Team />} />
          <Route path="/students" element={<Students />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  )
} 

export default App
