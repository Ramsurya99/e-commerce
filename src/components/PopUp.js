import React from "react";
import { ProductDetails } from "./ProductDetails";
export const PopUp = ({ product, onClose }) => {
    return (
      <div className="popup">
        <div className="popup-content">
          <ProductDetails product = {product} />
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
};