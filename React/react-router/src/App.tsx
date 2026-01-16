import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/signup'


function App() {
  
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login/:id" element={<Login/>}/>
        </Routes>
      
    </>
  )
}

export default App
