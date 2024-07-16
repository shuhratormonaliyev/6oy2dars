// src/components/Address.js
import React from 'react';

const Address = ({ address }) => {
  return (
    <div>
      <p>Region: {address.region}</p>
      <p>Zip code: {address.zipCode}</p>
    </div>
  );
};

export default Address;
