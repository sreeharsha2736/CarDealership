import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Inventory() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/cars')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-6">Available Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map(car => (
          <div key={car._id} className="bg-white rounded-lg shadow-md p-4">
            <img src={car.images[0]} alt={car.make} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">{car.make} {car.model}</h3>
            <p className="text-gray-600">Price: ${car.price}</p>
            <p className="text-gray-600">Year: {car.year}</p>
            <a href={`/car/${car._id}`} className="text-blue-500 hover:underline mt-4 block">View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inventory;
