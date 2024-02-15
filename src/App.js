import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ImageGenerationForm from './Components/Generator'
import Home from './Components/Home'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
    <div className="container">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/generate" element={<ImageGenerationForm/>}/>
      </Routes>
      </div>
      </main>
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App