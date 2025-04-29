import React from "react";
import { useFavorites } from "../context/useFavorites";
import HeartRegular from "../assets/heart-regular.svg";
import HeartSolid from "../assets/heart-solid.svg";

export function HeartButton({ id }) {
    const { toggleFavorite, isFavorite } = useFavorites();
    const isFav = isFavorite(id);

    return (
        <button onClick={() => toggleFavorite(id)} className="heart-icon">
            <img src={isFav ? HeartSolid : HeartRegular} alt="heart-button" />
        </button>
    );
}