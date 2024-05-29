import React from 'react'
import Home from './Home/Home'
import Courses from './Courses/Courses'
import {Route, Routes } from "react-router-dom"
import Signup from './components/Signup'
import ContactUs from './ContactUs/ContactUs'
import AboutUs from './AboutUs/AboutUs'

function App() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Course" element={<Courses/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/ContactUs" element={<ContactUs/>} />
      <Route path="/AboutUs" element={<AboutUs/>} />
    </Routes>
    </div>
    </>
  )
}

export default App
