import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarCard from './CarCard';

const CarList = () => {
    const [cars, setCars] = useState([]);
    const [filters, setFilters] = useState({ price: '', kms: '' });

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        const query = [];
        if (filters.price) query.push(`price=${filters.price}`);
        if (filters.kms) query.push(`kms=${filters.kms}`);
        const url = `http://localhost:5000/cars${query.length ? `?${query.join('&')}` : ''}`;
        const response = await axios.get(url);
        setCars(response.data);
    };

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const applyFilters = () => {
        fetchCars();
    };

    return (
        <div>
            <h1>Car Dealership</h1>
            <div>
                <label>
                    Max Price:
                    <input
                        type="number"
                        name="price"
                        value={filters.price}
                        onChange={handleFilterChange}
                    />
                </label>
                <label>
                    Max KMs:
                    <input
                        type="number"
                        name="kms"
                        value={filters.kms}
                        onChange={handleFilterChange}
                    />
                </label>
                <button onClick={applyFilters}>Apply Filters</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
                {cars.slice(0, 16).map((car) => (
                    <CarCard key={car._id} car={car} />
                ))}
            </div>
        </div>
    );
};

export default CarList;
