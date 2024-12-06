import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      {/* Check if image exists and has at least one element */}
      <img
        src={car.images && car.images.length > 0 ? car.images[0] : '/placeholder-image.png'} // Provide a fallback image
        alt={car.make}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">
        {car.make} {car.model}
      </h3>
      <p className="text-sm text-gray-500">{car.year} - ${car.price}</p>
      <Link
        to={`/car-details/${car.vin}`} // Correct path to car details
        className="block mt-3 bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600"
      >
        View Details
      </Link>
    </div>
  );
};

export default CarCard;
