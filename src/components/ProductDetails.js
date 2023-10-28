import React from 'react';
export const ProductDetails = ({ product }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
    </div>
  );
