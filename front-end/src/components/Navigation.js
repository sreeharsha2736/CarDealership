import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Car Dealership</Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact Us</Link>
          <Link to="/inventory" className="text-white hover:text-gray-300">Inventory</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
