import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Inventory from './components/Inventory';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container mx-auto my-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
