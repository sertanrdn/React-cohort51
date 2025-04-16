import React from "react";
import '../assets/ProductItem.css';

export function ProductItem ({ product }) {
    return (
        <div className="product-item">
            <img 
            src={product.image} 
            alt={product.title}
            className="product-image"
            />
            <h3>{product.title}</h3>
        </div>
    );
}