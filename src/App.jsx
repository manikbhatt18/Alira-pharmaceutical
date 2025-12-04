import React from 'react'
import './App.css'
import './index.css'

import { Route, Routes } from 'react-router-dom'
import Navbar from './components/common/Navbar.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/common/Footer.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer />
    </div>
      
    
    
  )
}

export default App