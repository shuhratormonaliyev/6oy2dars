// src/components/Car.js
import React from 'react';

const Car = ({ car }) => {
  return (
    <div className="car-card">
      <p>{car.brand}</p>
    </div>
  );
};

export default Car;
