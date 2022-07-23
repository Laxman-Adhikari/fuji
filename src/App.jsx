import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from "./components/home/Home"
import Contact from "./components/contact/Contact"
import About from "./components/about/About"
import Footer from "./components/footer/Footer"
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <>
    
        <Navbar />


          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
      

          </Routes>

        

        <Footer />


    </>
  )
}

export default App