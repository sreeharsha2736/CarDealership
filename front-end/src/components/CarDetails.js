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
  }, [vin]); // Re-run this effect when the vin changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="car-details">
      <h2>{car.make} {car.model}</h2>
      <p>Year: {car.year}</p>
      <p>Color: {car.color}</p>
      <p>KMs: {car.kms}</p>
      <p>Price: ${car.price}</p>
      <img src={car.images[0]} alt={`${car.make} ${car.model}`} />
      <div>
        {car.images.map((image, index) => (
          <img key={index} src={image} alt={`Car image ${index + 1}`} className="car-image" />
        ))}
      </div>
    </div>
  );
};

export default CarDetails;
