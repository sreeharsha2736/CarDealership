import React, { useState, useEffect } from 'react';

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

  const makeModelMap = {
    Toyota: ['Corolla', 'Camry', 'RAV4', 'Highlander'],
    Honda: ['Civic', 'Accord', 'CR-V', 'Pilot'],
    Ford: ['Mustang', 'Explorer', 'Focus', 'F-150'],
    BMW: ['X5', 'X3', '3 Series', '5 Series'],
  };

  const makes = Object.keys(makeModelMap);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'make' ? { model: '' } : {}), // Reset model if make is changed
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(filters); // Pass filters back to parent component
  };

  return (
    <form className="p-6 bg-white rounded-lg shadow-lg space-y-6" onSubmit={handleSubmit}>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Filters</h3>

      {/* Make Dropdown */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">Make</label>
        <select
          name="make"
          value={filters.make}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-md text-gray-700"
        >
          <option value="">Please select a make</option>
          {makes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
      </div>

      {/* Model Dropdown */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">Model</label>
        <select
          name="model"
          value={filters.model}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-md text-gray-700"
          disabled={!filters.make}
        >
          <option value="">
            {filters.make ? 'Please select a model' : 'Please select a make first'}
          </option>
          {filters.make &&
            makeModelMap[filters.make].map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
        </select>
      </div>

      {/* Price Range Slider */}
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-600 mb-2">
          Price Range (${filters.minPrice} - ${filters.maxPrice})
        </label>
        <div className="flex items-center justify-between">
          <input
            type="number"
            name="minPrice"
            min="0"
            max="100000"
            value={filters.minPrice}
            onChange={handleInputChange}
            className="w-full mr-2 px-2 py-1 border rounded-md"
          />
          <input
            type="number"
            name="maxPrice"
            min="0"
            max="100000"
            value={filters.maxPrice}
            onChange={handleInputChange}
            className="w-full ml-2 px-2 py-1 border rounded-md"
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
            type="number"
            name="minYear"
            min="2000"
            max="2025"
            value={filters.minYear}
            onChange={handleInputChange}
            className="w-full mr-2 px-2 py-1 border rounded-md"
          />
          <input
            type="number"
            name="maxYear"
            min="2000"
            max="2025"
            value={filters.maxYear}
            onChange={handleInputChange}
            className="w-full ml-2 px-2 py-1 border rounded-md"
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
            type="number"
            name="minKms"
            min="0"
            max="200000"
            value={filters.minKms}
            onChange={handleInputChange}
            className="w-full mr-2 px-2 py-1 border rounded-md"
          />
          <input
            type="number"
            name="maxKms"
            min="0"
            max="200000"
            value={filters.maxKms}
            onChange={handleInputChange}
            className="w-full ml-2 px-2 py-1 border rounded-md"
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
