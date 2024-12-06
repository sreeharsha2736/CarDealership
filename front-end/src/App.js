import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Inventory from './components/Inventory';
import CarDetails from './components/CarDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/car-details/:vin" element={<CarDetails />} /> {/* Updated Route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
