
import './App.css';
import Header from './Header';
import React from 'react';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import About from './About';
import Services from './Services';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Router>
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        
      </Routes>
      <Footer />
    </>
  </Router>
  );
}

export default App;
