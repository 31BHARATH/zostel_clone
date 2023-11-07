import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Destination from './Pages/Destination'
import Navbar from './Components/Navbar'
import Franchise from './Pages/Franchise'
import Footer from './Components/Footer'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/destinations' element={<Destination />}></Route>
      <Route path='/franchise'  element={<Franchise />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}
