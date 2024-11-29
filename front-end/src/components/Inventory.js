// src/pages/Inventory.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filters from '../components/Filters';
import CarCard from '../components/CarCard';

const Inventory = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [filters, setFilters] = useState({});

  // Fetch all cars from the database
  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/cars');
      setCars(response.data);  // Store all cars
      setFilteredCars(response.data);  // Initially, show all cars
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  // Apply filters to the list of cars
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Filter the cars based on the applied filters
    const filtered = cars.filter((car) => {
      return (
        (newFilters.make === '' || car.make.toLowerCase().includes(newFilters.make.toLowerCase())) &&
        (newFilters.model === '' || car.model.toLowerCase().includes(newFilters.model.toLowerCase())) &&
        car.price >= newFilters.minPrice && car.price <= newFilters.maxPrice &&
        car.year >= newFilters.minYear && car.year <= newFilters.maxYear &&
        car.kms >= newFilters.minKms && car.kms <= newFilters.maxKms
      );
    });
    setFilteredCars(filtered);
  };

  // Initial fetch of cars
  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className="flex space-x-8">
      {/* Filters Section */}
      <div className="w-1/4">
        <Filters onFilterChange={handleFilterChange} />
      </div>

      {/* Cars Display Section */}
      <div className="w-3/4 grid grid-cols-4 gap-8">
        {filteredCars.length === 0 ? (
          <p className="text-center text-gray-500">No cars found with the selected filters.</p>
        ) : (
          filteredCars.map((car) => <CarCard key={car.vin} car={car} />)
        )}
      </div>
    </div>
  );
};

export default Inventory;
