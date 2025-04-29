import React, { useState } from "react";
import { FavoritesContext } from "./FavoritesContext";

export function FavoritesProvider({ children }) {
    const [favoriteIds, setFavoriteIds] = useState([]);

    const toggleFavorite = (id) => {
        setFavoriteIds((prev) => 
            prev.includes(id) 
                ? prev.filter((fid) => fid !== id) 
                : [...prev, id]
        );
    }

    const isFavorite = (id) => favoriteIds.includes(id);

    return (
        <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

