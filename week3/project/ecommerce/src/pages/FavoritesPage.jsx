import React, { useState, useEffect } from "react";
import { useFavorites } from "../context/useFavorites";
import { ProductList } from "../components/ProductList";

export function FavoritesPage() {
    const { favoriteIds } = useFavorites();
    const [favoriteProducts, setFavoriteProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function loadFavoriteProducts() {
            if(favoriteIds.length === 0) {
                setFavoriteProducts([]);
                return;
            }

            setIsLoading(true);
            setError(null);

            try {
                const productPromise = favoriteIds.map(id =>
                    fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json())
                );

                const products = await Promise.all(productPromise);
                setFavoriteProducts(products);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }

        loadFavoriteProducts();
    }, [favoriteIds]);

    return (
        <div>
            <h2>Favorites</h2>
            {isLoading && <p>Loading favorites...</p>}
            {error && <p>{error}</p>}
            {!isLoading && !error && favoriteProducts.length === 0 && <p>No favourites yet.</p>}
            {!isLoading && !error && favoriteProducts.length > 0 && (
                <ProductList products={favoriteProducts} />
            )}
        </div>
    )
}