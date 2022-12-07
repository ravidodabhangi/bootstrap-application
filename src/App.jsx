import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./css/style.css"
import HomePage from './components/HomePage';
import About from './components/About';
import Service from './components/Service';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='service' element={<Service/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
// font-family: 'Barlow', sans-serif;