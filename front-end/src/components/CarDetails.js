import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CarDetails = () => {
  const { vin } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDateTime: '',
    carModel: '',
    carMake: '',
    carVin: vin,
    carPrice: 0,
  });

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/cars/${vin}`);
        setCar(response.data);
        setFormData({
          ...formData,
          carModel: response.data.model,
          carMake: response.data.make,
          carVin: response.data.vin,
          carPrice: response.data.price,
        });
      } catch (error) {
        setError('Car not found or error fetching details.');
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [vin]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const now = new Date();
    const preferredDateTime = new Date(formData.preferredDateTime);
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    if (preferredDateTime <= now) {
      alert('Please select a future date and time.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/book-slot', formData);
      alert(response.data.message);
      setIsModalOpen(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredDateTime: '',
        carModel: '',
        carMake: '',
        carVin: vin,
        carPrice: 0,
      });
      window.location.reload();  // Refresh the page after successful submission
    } catch (error) {
      alert(error.response?.data?.message || 'There was an error booking the slot. Please try again.');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredDateTime: '',
      carModel: '',
      carMake: '',
      carVin: vin,
      carPrice: 0,
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="spinner"></div>
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
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-700 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Booking Slot */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-semibold mb-4">Book a Slot</h3>
            <form onSubmit={handleSubmit}>
              {/* Car Details Section */}
              <div className="mb-4">
                <p><strong>Car Make:</strong> {formData.carMake}</p>
                <p><strong>Car Model:</strong> {formData.carModel}</p>
                <p><strong>VIN:</strong> {formData.carVin}</p>
                <p><strong>Price:</strong> ₹{formData.carPrice}</p>
              </div>

              {/* User Details */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-semibold">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="preferredDateTime" className="block text-sm font-semibold">Preferred Date and Time</label>
                <input
                  type="datetime-local"
                  id="preferredDateTime"
                  name="preferredDateTime"
                  value={formData.preferredDateTime}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700"
              >
                Book Now
              </button>
            </form>
            <button
              onClick={handleCloseModal}
              className="mt-4 w-full bg-gray-300 py-2 rounded-md text-gray-800 hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
