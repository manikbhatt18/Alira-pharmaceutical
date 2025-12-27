import React from 'react'
import './App.css'
import './index.css'

import { Route, Routes } from 'react-router-dom'
import Navbar from './components/common/Navbar.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/common/Footer.jsx'
import About from './pages/About.jsx'
import Category1 from './pages/products/Category1.jsx'
import Category2 from './pages/products/Category2.jsx'
import Category3 from './pages/products/Category3.jsx'
import Category4 from './pages/products/Category4.jsx'
import Category5 from './pages/products/Category5.jsx'
import Category6 from './pages/products/Category6.jsx'
import Category7 from './pages/products/Category7.jsx'
import Category8 from './pages/products/Category8.jsx'
import Category9 from './pages/products/Category9.jsx'
import Category10 from './pages/products/Category10.jsx'
import Category11 from './pages/products/Category11.jsx'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path="/products/surgical-instruments/:productId" element={<Category1 />} />
        <Route path="/products/retractors-elevators/:productId" element={<Category2 />} />
        <Route path="/products/bone-neuro/:productId" element={<Category3 />} />
        <Route path="/products/ent-oral/:productId" element={<Category4 />} />
        <Route path="/products/surgical-blades/:productId" element={<Category5 />} />
        <Route path="/products/trays-utility/:productId" element={<Category6 />} />
        <Route path="/products/gloves/:productId" element={<Category7 />} />
        <Route path="/products/ppe/:productId" element={<Category8 />} />
        <Route path="/products/drapes-gowns/:productId" element={<Category9 />} />
        <Route path="/products/wound-care/:productId" element={<Category10 />} />
        <Route path="/products/disposables-iv/:productId" element={<Category11 />} />
        
      </Routes>
      <Footer />
    </div>
      
    
    
  )
}

export default App