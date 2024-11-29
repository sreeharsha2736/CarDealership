import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600">Welcome to Our Car Dealership</h1>
      <p className="mt-4 text-xl text-gray-700 text-center">
        Explore a wide range of cars available at unbeatable prices.
      </p>
      <a
        href="/inventory"
        className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700"
      >
        View Inventory
      </a>
    </div>
  );
};

export default Home;
