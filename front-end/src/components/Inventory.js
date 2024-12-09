import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filters from '../components/Filters';
import CarCard from '../components/CarCard';

const Inventory = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [filters, setFilters] = useState({
    make: '',
    model: '',
    price: 50000,
    year: 2012,
    kms: 100000,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 16;

  // Fetch all cars from the database
  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/cars');
      setCars(response.data); // Store all cars
      setFilteredCars(response.data); // Initially, show all cars
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  // Apply filters to the list of cars
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);

    const filtered = cars.filter((car) => {
      const matchesMake = !newFilters.make || car.make === newFilters.make;
      const matchesModel = !newFilters.model || car.model === newFilters.model;
      const matchesPrice = car.price <= newFilters.price;
      const matchesYear = car.year <= newFilters.year;
      const matchesKms = car.kms <= newFilters.kms;

      return matchesMake && matchesModel && matchesPrice && matchesYear && matchesKms;
    });

    setFilteredCars(filtered);
    setCurrentPage(1); // Reset to the first page
  };

  // Pagination logic
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
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
      <div className="w-3/4">
        <div className="grid grid-cols-4 gap-6">
          {currentCars.length === 0 ? (
            <p className="text-center text-gray-500">No cars found with the selected filters.</p>
          ) : (
            currentCars.map((car) => <CarCard key={car.vin} car={car} />)
          )}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
