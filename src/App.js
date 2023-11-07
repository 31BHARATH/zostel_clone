import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Destination from './Pages/Destination'
import Navbar from './Components/Navbar'
import Franchise from './Pages/Franchise'
import Footer from './Components/Footer'
import ZostelHomes from './Pages/ZostelHomes'
import Blogs from './Pages/Blogs'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/destinations' element={<Destination />}/>
      <Route path='/franchise'  element={<Franchise />}/>
      <Route path='/zostel-homes' element={<ZostelHomes/>}/>
      <Route path='/blogs' element={<Blogs />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}
