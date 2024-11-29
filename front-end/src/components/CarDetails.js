import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      const response = await axios.get(`http://localhost:5000/api/cars/${id}`);
      setCar(response.data);
    };
    fetchCar();
  }, [id]);

  if (!car) return <div>Loading...</div>;

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600">{car.make} {car.model}</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {car.images.map((image, index) => (
            <img key={index} src={image} alt={`Car ${index + 1}`} className="w-full mb-4 rounded-lg" />
          ))}
        </div>
        <div>
          <p className="text-lg text-gray-700"><strong>Year:</strong> {car.year}</p>
          <p className="text-lg text-gray-700"><strong>Color:</strong> {car.color}</p>
          <p className="text-lg text-gray-700"><strong>KMs:</strong> {car.kms}</p>
          <p className="text-lg text-gray-700"><strong>VIN#:</strong> {car.vin}</p>
          <p className="text-lg text-gray-700"><strong>Price:</strong> ${car.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
