import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    make: '',
    model: '',
    price: 100000, // Default price in the middle of range
    year: 2025, // Default year in the middle of range
    kms: 100000, // Default KMs in the middle of range
  });

  const makeModelMap = {
    Toyota: ['Corolla', 'Camry', 'RAV4', 'Highlander'],
    Honda: ['Civic', 'Accord', 'CR-V', 'Pilot'],
    Ford: ['Mustang', 'Explorer', 'Focus', 'F-150'],
    BMW: ['X5', 'X3', '3 Series', '5 Series'],
  };

  const makes = Object.keys(makeModelMap);

  const handleSliderChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

      {/* Single Price Slider */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Price: Up to ${filters.price}
        </label>
        <input
          type="range"
          min="0"
          max="100000"
          value={filters.price}
          onChange={(e) => handleSliderChange('price', parseInt(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Single Year Slider */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Year: Up to {filters.year}
        </label>
        <input
          type="range"
          min="2000"
          max="2025"
          value={filters.year}
          onChange={(e) => handleSliderChange('year', parseInt(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Single KMs Slider */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          KMs: Up to {filters.kms} km
        </label>
        <input
          type="range"
          min="0"
          max="100000"
          value={filters.kms}
          onChange={(e) => handleSliderChange('kms', parseInt(e.target.value))}
          className="w-full"
        />
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
