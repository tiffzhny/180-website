import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar'
import Team from './pages/Team'
import Home from './pages/Home'
import JoinUs from './pages/JoinUs'
import About from './pages/About'

function App() {

  return (
    <Router>
      <NavBar />
      <main className="pt-20">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main> 
    </Router>
  )
}

export default App
