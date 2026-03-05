import React from 'react';
import Header from './header';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Tour from './components/pages/Tour';
import Testimonials from './components/pages/Testimonials';
import Contact from './components/pages/Contact';
import Footer from './components/pages/footer';



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/tour' element={<Tour />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;