import React from "react";
import '../assets/ProductItem.css';
import { Link } from "react-router-dom";

export function ProductItem ({ product }) {
    return (
        <Link to={`/product/${product.id}`} className="product-link">
            <div className="product-item">
                <img 
                src={product.image} 
                alt={product.title}
                className="product-image"
                />
                <h3>{product.title}</h3>
            </div>
        </Link>
       
    );
}