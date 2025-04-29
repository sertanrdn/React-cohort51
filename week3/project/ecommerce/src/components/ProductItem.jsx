import React from "react";
import '../assets/ProductItem.css';
import { Link } from "react-router-dom";
import { HeartButton } from "./HeartButton";

export function ProductItem ({ product }) {
    return (
        <div className="product-item">
            <HeartButton id={product.id} />
            <Link to={`/product/${product.id}`} className="product-link">
                <img 
                src={product.image} 
                alt={product.title}
                className="product-image"
                />
                <h3>{product.title}</h3>  
            </Link>
        </div>
    );
}