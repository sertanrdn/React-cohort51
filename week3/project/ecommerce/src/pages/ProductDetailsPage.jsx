import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../assets/ProductDetailsPage.css';
import { HeartButton } from "../components/HeartButton";

export function ProductDetailsPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadProduct() {
            setIsLoading(true);
            setError(null);
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`);

                if(!res.ok) throw new Error(`HTTP Error: ${res.status}`);
                
                const data = await res.json();

                setProduct(data);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        }

        loadProduct();
    }, [id]);

    return (
        <div className="product-details-container">
            {isLoading && <p>Loading product...</p>}
            {error && <p>{error.message}</p>}
            {!isLoading && !error && product && (
                <>
                    <div className="product-info">
                        <div className="product-info-title">
                            <h2>{product.title}</h2>
                        </div>
                        <div className="product-info-description">
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className="product-image-wrapper">
                        <img 
                            className="product-image"
                            src={product.image} 
                            alt={product.title} 
                        />
                        <HeartButton id={product.id} />
                    </div>
                    
                </>
            )}
        </div>
    );
}