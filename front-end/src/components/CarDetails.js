import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CarDetails = () => {
  const { vin } = useParams(); // Get the VIN from the URL
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/cars/${vin}`);
        setCar(response.data);
      } catch (error) {
        setError('Car not found or error fetching details.');
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [vin]); // Re-run this effect when the VIN changes

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-lg font-semibold text-gray-600 animate-pulse">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-lg font-semibold text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-10">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">
            {car.make} {car.model}
          </h1>
          <p className="text-lg opacity-90">
            {car.description || 'Discover the ultimate driving experience with this premium vehicle.'}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Image Gallery */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {car.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Car image ${index + 1}`}
                className="rounded-md shadow-md hover:scale-105 transform transition duration-300"
              />
            ))}
          </div>
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Details Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Details</h2>
            <ul className="space-y-4">
              <li className="text-gray-600">
                <span className="font-medium text-gray-800">Make:</span> {car.make}
              </li>
              <li className="text-gray-600">
                <span className="font-medium text-gray-800">Model:</span> {car.model}
              </li>
              <li className="text-gray-600">
                <span className="font-medium text-gray-800">Year:</span> {car.year}
              </li>
              <li className="text-gray-600">
                <span className="font-medium text-gray-800">Color:</span> {car.color}
              </li>
              <li className="text-gray-600">
                <span className="font-medium text-gray-800">KMs:</span> {car.kms.toLocaleString()} km
              </li>
              <li className="text-gray-600">
                <span className="font-medium text-gray-800">VIN:</span> {car.vin}
              </li>
              <li className="text-gray-600">
                <span className="font-medium text-gray-800">Fuel Type:</span> {car.fuelType || 'Gasoline'}
              </li>
              <li className="text-gray-600">
                <span className="font-medium text-gray-800">Transmission:</span> {car.transmission || 'Automatic'}
              </li>
              <li className="text-gray-600">
                <span className="font-medium text-gray-800">Seats:</span> {car.seats || 5}
              </li>
            </ul>
          </div>

          {/* Call-to-Action */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold mb-4">Interested in this car?</h2>
            <p className="text-lg opacity-90 mb-6 text-center">
              Contact us now to schedule a test drive or get more information about this vehicle.
            </p>
            <button className="bg-white text-blue-700 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
