import React from 'react'
import Home from './pages/Home/Home'

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Menu from './components/Home/Menu/Menu';
import  About from './components/Home/About/About';
import Popular from './components/Home/Popular/Popular';
import Cart from './components/Home/Menu/Cart';
import TestimonialsPage from './components/Review/TestimonialsPage';
import Contact from './components/ContactUsPage/Contact';
import Login from './components/Login/Login';
import Register from './components/Register/Register';



const App = () => {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/Menu" element={<Menu/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Popular" element={<Popular/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/TestimonialsPage" element={<TestimonialsPage/>}/> 
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App