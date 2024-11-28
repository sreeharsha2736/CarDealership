import React from 'react';

function Home() {
  return (
    <div className="container mx-auto text-center py-16">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Car Dealership!</h1>
      <p className="text-lg text-gray-600 mb-8">Find the best cars at unbeatable prices. Browse our collection now!</p>
      <a href="/inventory" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">Browse Inventory</a>
    </div>
  );
}

export default Home;
