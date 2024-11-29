// src/components/CarCard.js

import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={car.images[0]} alt={car.model} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h4 className="font-semibold text-xl text-gray-800">{car.make} {car.model}</h4>
        <p className="text-sm text-gray-600">Year: {car.year}</p>
        <p className="text-sm text-gray-600">Price: ${car.price}</p>
        <p className="text-sm text-gray-600">KMs: {car.kms} km</p>
      </div>
    </div>
  );
};

export default CarCard;
