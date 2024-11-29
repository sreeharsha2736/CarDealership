import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Car Dealership</h1>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">About</Link>
        </li>
        <li>
          <Link to="/inventory" className="hover:underline">Inventory</Link>
        </li>
        <li>
          <Link to="/contact-us" className="hover:underline">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
