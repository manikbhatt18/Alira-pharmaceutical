import React from 'react'
import './App.css'
import './index.css'

import { Route, Routes } from 'react-router-dom'
import Navbar from './components/common/Navbar.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
      
    
    
  )
}

export default App