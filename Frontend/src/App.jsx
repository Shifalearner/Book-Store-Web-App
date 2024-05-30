import React from 'react'
import Home from './Home/Home'
import Courses from './Courses/Courses'
import {Navigate, Route, Routes } from "react-router-dom"
import Signup from './components/Signup'
import ContactUs from './ContactUs/ContactUs'
import AboutUs from './AboutUs/AboutUs'
import { Toaster } from "react-hot-toast"
import { useAuth } from './Context/AuthProvider'

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Course" element={authUser?<Courses/>:<Navigate to="/signup"/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/ContactUs" element={<ContactUs/>} />
      <Route path="/AboutUs" element={<AboutUs/>} />
    </Routes>
    <Toaster />
    </div>
    </>
  )
}

export default App
