// src/components/Filters.js

import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    make: '',
    model: '',
    minPrice: 0,
    maxPrice: 100000,
    minYear: 2000,
    maxYear: 2025,
    minKms: 0,
    maxKms: 200000,
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(filters);  // Pass filters back to parent component
  };

  return (
    <form className="p-6 bg-white rounded-lg shadow-lg space-y-6" onSubmit={handleSubmit}>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Filters</h3>
      
      {/* Make Input */}
      <div>
        <label htmlFor="make" className="block text-sm font-medium text-gray-600 mb-2">
          Make
        </label>
        <input
          type="text"
          name="make"
          id="make"
          placeholder="Enter car make"
          value={filters.make}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Model Input */}
      <div>
        <label htmlFor="model" className="block text-sm font-medium text-gray-600 mb-2">
          Model
        </label>
        <input
          type="text"
          name="model"
          id="model"
          placeholder="Enter car model"
          value={filters.model}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Price Range Slider */}
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-600 mb-2">
          Price Range (${filters.minPrice} - ${filters.maxPrice})
        </label>
        <div className="flex items-center justify-between">
          <input
            type="range"
            name="minPrice"
            min="0"
            max="100000"
            value={filters.minPrice}
            onChange={handleChange}
            className="w-full"
          />
          <input
            type="range"
            name="maxPrice"
            min="0"
            max="100000"
            value={filters.maxPrice}
            onChange={handleChange}
            className="w-full"
          />
        </div>
      </div>

      {/* Year Range Slider */}
      <div>
        <label htmlFor="year" className="block text-sm font-medium text-gray-600 mb-2">
          Year Range ({filters.minYear} - {filters.maxYear})
        </label>
        <div className="flex items-center justify-between">
          <input
            type="range"
            name="minYear"
            min="2000"
            max="2025"
            value={filters.minYear}
            onChange={handleChange}
            className="w-full"
          />
          <input
            type="range"
            name="maxYear"
            min="2000"
            max="2025"
            value={filters.maxYear}
            onChange={handleChange}
            className="w-full"
          />
        </div>
      </div>

      {/* KMs Range Slider */}
      <div>
        <label htmlFor="kms" className="block text-sm font-medium text-gray-600 mb-2">
          KMs Range ({filters.minKms} - {filters.maxKms} km)
        </label>
        <div className="flex items-center justify-between">
          <input
            type="range"
            name="minKms"
            min="0"
            max="200000"
            value={filters.minKms}
            onChange={handleChange}
            className="w-full"
          />
          <input
            type="range"
            name="maxKms"
            min="0"
            max="200000"
            value={filters.maxKms}
            onChange={handleChange}
            className="w-full"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Apply Filters
      </button>
    </form>
  );
};

export default Filters;
