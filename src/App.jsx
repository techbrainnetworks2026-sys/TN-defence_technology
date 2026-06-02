import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Industries from './components/Industries';
import './App.css';

import Product1 from './pages/products/Product1';
import Product2 from './pages/products/Product2';
import Product3 from './pages/products/Product3';
import Product4 from './pages/products/Product4';
import Product5 from './pages/products/Product5';
import Product6 from './pages/products/Product6';
import Product7 from './pages/products/Product7';
import Product8 from './pages/products/Product8';
import Product9 from './pages/products/Product9';
import Product10 from './pages/products/Product10';
import Product11 from './pages/products/Product11';
import Product12 from './pages/products/Product12';
import Product13 from './pages/products/Product13';
import Product14 from './pages/products/Product14';
import Product15 from './pages/products/Product15';
import Product16 from './pages/products/Product16';
import Product17 from './pages/products/Product17';
import Product18 from './pages/products/Product18';
import Product19 from './pages/products/Product19';
import Product20 from './pages/products/Product20';

function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
          reveals[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div className="app-professional">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Industries />
            <Products />
            <Careers />
            <Contact />
            <Footer />
          </div>
        } />
        <Route path='/product/1' element={<Product1 />} />
        <Route path='/product/2' element={<Product2 />} />
        <Route path='/product/3' element={<Product3 />} />
        <Route path='/product/4' element={<Product4 />} />
        <Route path='/product/5' element={<Product5 />} />
        <Route path='/product/6' element={<Product6 />} />
        <Route path='/product/7' element={<Product7 />} />
        <Route path='/product/8' element={<Product8 />} />
        <Route path='/product/9' element={<Product9 />} />
        <Route path='/product/10' element={<Product10 />} />
        <Route path='/product/11' element={<Product11 />} />
        <Route path='/product/12' element={<Product12 />} />
        <Route path='/product/13' element={<Product13 />} />
        <Route path='/product/14' element={<Product14 />} />
        <Route path='/product/15' element={<Product15 />} />
        <Route path='/product/16' element={<Product16 />} />
        <Route path='/product/17' element={<Product17 />} />
        <Route path='/product/18' element={<Product18 />} />
        <Route path='/product/19' element={<Product19 />} />
        <Route path='/product/20' element={<Product20 />} />
      </Routes>
    </Router>
  );
}

export default App;
