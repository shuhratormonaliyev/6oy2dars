// src/components/User.js
import React from 'react';
import Address from './Address';
import Car from './Car';

const User = ({ user }) => {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>Telefon: {user.phone}</p>
      <p>Email: {user.email}</p>
      <Address address={user.address} />
      <div>
        <h3>Cars:</h3>
        {user.cars.map((car, index) => (
          <Car key={index} car={car} />
        ))}
      </div>
    </div>
  );
};

export default User;
