import React from 'react'
import Header from '../common/header/Header'
import {Routes, Route} from "react-router-dom";
import Home from '../home/Home';
import Footer from '../common/footer/Footer';
import About from '../about/About';
import Services from '../services/Services';
import Blog from '../blog/Blog';
import Pricing from '../pricing/Pricing';
import Contact from '../contact/Contact';

const Pages = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path='/services' Component={Services}/>
        <Route path='/blog' Component={Blog}/>
        <Route path='/pricing' Component={Pricing}/>
        <Route path='/contact' Component={Contact}/>
      </Routes>
      <Footer />    
    </>
  )
}

export default Pages