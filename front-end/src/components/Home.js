import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white p-10 text-center">
        <h1 className="text-5xl font-bold">Welcome to Our Car Dealership</h1>
        <p className="mt-4 text-lg">
          Your trusted partner for new and pre-owned vehicles. Find your dream car today!
        </p>
        <Link
          to="/inventory"
          className="mt-6 inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded hover:bg-gray-200"
        >
          Browse Inventory
        </Link>
      </section>

      {/* Featured Cars Section */}
      <section className="mt-10 p-6">
        <h2 className="text-3xl font-bold text-center text-blue-600">Featured Vehicles</h2>
        <p className="mt-4 text-gray-700 text-center">
          Check out our handpicked selection of the finest vehicles in our inventory.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Example Featured Car Cards */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://example.com/images/car1.jpg"
              alt="Car 1"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Toyota Corolla 2020</h3>
            <p className="text-gray-700 mt-2">$18,000</p>
            <Link
              to="/inventory/1HGCM82633A123456"
              className="block mt-4 bg-blue-500 text-white py-2 text-center rounded hover:bg-blue-600"
            >
              View Details
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://example.com/images/car2.jpg"
              alt="Car 2"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Honda Accord 2019</h3>
            <p className="text-gray-700 mt-2">$16,500</p>
            <Link
              to="/inventory/2HGCM82633A987654"
              className="block mt-4 bg-blue-500 text-white py-2 text-center rounded hover:bg-blue-600"
            >
              View Details
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://example.com/images/car3.jpg"
              alt="Car 3"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Ford Mustang 2021</h3>
            <p className="text-gray-700 mt-2">$25,000</p>
            <Link
              to="/inventory/3HGCM82633A112233"
              className="block mt-4 bg-blue-500 text-white py-2 text-center rounded hover:bg-blue-600"
            >
              View Details
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mt-10 bg-gray-200 py-10 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-600">Wide Selection</h3>
            <p className="text-gray-700 mt-2">
              Explore a variety of vehicles, from sedans to SUVs, to find the perfect fit.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-600">Unbeatable Prices</h3>
            <p className="text-gray-700 mt-2">
              Get the best value for your money with competitive pricing and exclusive offers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-600">Customer Satisfaction</h3>
            <p className="text-gray-700 mt-2">
              Experience world-class service and support from our dedicated team.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-10 p-6">
        <h2 className="text-3xl font-bold text-center text-blue-600">What Our Customers Say</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="italic text-gray-600">
              "Absolutely thrilled with my purchase! The team was incredibly helpful."
            </p>
            <p className="mt-4 text-right font-semibold">- Mark T.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="italic text-gray-600">
              "Fantastic selection of cars and amazing prices. Highly recommend!"
            </p>
            <p className="mt-4 text-right font-semibold">- Lisa S.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="italic text-gray-600">
              "The staff went above and beyond to help me find the perfect car."
            </p>
            <p className="mt-4 text-right font-semibold">- Daniel R.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="mt-10 bg-blue-600 text-white py-10 text-center">
        <h2 className="text-3xl font-bold">Drive Home Your Dream Car Today!</h2>
        <p className="mt-4">
          Visit us or explore our inventory online to start your car-buying journey.
        </p>
        <Link
          to="/inventory"
          className="mt-6 inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded hover:bg-gray-200"
        >
          Browse Inventory
        </Link>
      </section>
    </div>
  );
};

export default Home;
