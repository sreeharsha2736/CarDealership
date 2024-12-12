import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate for programmatic navigation
import axios from 'axios';
import CarCard from '../components/CarCard';
import { motion } from 'framer-motion';

const Home = () => {
  const [cars, setCars] = useState([]);
  const [featuredCars, setFeaturedCars] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  // Fetch cars from the database
  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/cars');
      setCars(response.data);
      setFeaturedCars(response.data.slice(0, 6)); // Display the first 6 cars as featured
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  // Fetch cars on initial render
  useEffect(() => {
    fetchCars();
  }, []);

  // Animation for the car when clicking on Browse Inventory
  const handleButtonClick = () => {
    setIsAnimating(true); // Start the animation

    // Delay redirection by 2 seconds (duration of the animation)
    setTimeout(() => {
      setIsAnimating(false); // Reset animation
      navigate('/inventory'); // Redirect to the inventory page
    }, 1000); // Duration of animation (2 seconds)
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-28 text-center shadow-lg relative">
        <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Our Car Dealership</h1>
        <p className="text-xl max-w-2xl mx-auto mb-6 font-medium opacity-80">
          Your trusted partner for new and pre-owned vehicles. Explore a world of automotive excellence!
        </p>

        {/* Car Animation and Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isAnimating ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute left-1/2 transform -translate-x-1/2 bottom-10"
        >
          {/* Animated Car */}
          <motion.img
  src="https://d2ivfcfbdvj3sm.cloudfront.net/7fc965ab77efe6e0fa62e4ca1ea7673bb25f43560e1e3d8e88cb10/stills_0640_png/MY2022/15275/15275_st0640_116.png" // Replace with an actual car image or icon
  alt="Car"
  className="w-40"
  initial={{ x: 500 }}  // Start from right (500px off-screen)
  animate={{ x: isAnimating ? -500 : 500 }} // Move left when animating, reset to the right otherwise
  transition={{ type: 'spring', stiffness: 100, duration: 2 }}
/>

        </motion.div>

        {/* Browse Inventory Button */}
        <motion.div
          className="mt-8"
          initial={{ scale: 1 }}
          animate={{ scale: isAnimating ? 0.9 : 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <button
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-xl hover:bg-blue-200 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleButtonClick} // Trigger the animation on click
          >
            Browse Inventory
          </button>
        </motion.div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Featured Vehicles</h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Browse our exclusive selection of featured vehicles handpicked for you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredCars.length > 0 ? (
            featuredCars.map((car) => <CarCard key={car.vin} car={car} />)
          ) : (
            <p className="text-center text-gray-500 col-span-full">No featured cars available at the moment.</p>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Wide Selection</h3>
            <p className="text-gray-600">
              We offer a variety of cars, including sedans, SUVs, and more, catering to every need.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Unbeatable Prices</h3>
            <p className="text-gray-600">
              Enjoy competitive prices and great deals that provide the best value for your money.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Customer Satisfaction</h3>
            <p className="text-gray-600">
              Our priority is providing an excellent customer experience, with ongoing support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
