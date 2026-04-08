import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

import Services from './components/Services';
import Industries from './components/Industries';

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
  );
}

export default App;
