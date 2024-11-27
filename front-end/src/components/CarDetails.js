import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        const fetchCar = async () => {
            const response = await axios.get(`http://localhost:5000/cars/${id}`);
            setCar(response.data);
        };
        fetchCar();
    }, [id]);

    if (!car) return <p>Loading...</p>;

    return (
        <div>
            <h1>{`${car.make} ${car.model}`}</h1>
            <p>Year: {car.year}</p>
            <p>Price: ${car.price}</p>
            <p>Color: {car.color}</p>
            <p>KMs: {car.kms}</p>
            <p>VIN: {car.vin}</p>
            <div>
                {car.images.map((image, index) => (
                    <img key={index} src={image} alt={`Car ${index}`} style={{ width: '200px', margin: '10px' }} />
                ))}
            </div>
        </div>
    );
};

export default CarDetails;
