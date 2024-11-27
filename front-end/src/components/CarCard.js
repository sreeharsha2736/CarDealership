import React from 'react';
import { useNavigate } from 'react-router-dom';

const CarCard = ({ car }) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/details/${car._id}`);
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
            <img
                src={car.images[0] || 'https://via.placeholder.com/150'}
                alt={`${car.make} ${car.model}`}
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <h3>{`${car.make} ${car.model}`}</h3>
            <p>Price: ${car.price}</p>
            <button onClick={handleViewDetails}>View Details</button>
        </div>
    );
};

export default CarCard;
