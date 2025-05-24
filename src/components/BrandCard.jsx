import React from 'react';

const BrandCard = ({ brand }) => {
  return (
    <div className="brand-card">
      {brand.logo && <img src={brand.logo} alt={brand.name} className="brand-logo" />}
    </div>
  );
};

export default BrandCard;
