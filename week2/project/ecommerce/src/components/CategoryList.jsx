import React from "react";
import '../assets/CategoryList.css';

export function CategoryList({ categories, onCategoryClick, selectedCategory }) {
    return (
        <div className="category-list">
            {categories.map((category, index) => (
                <button
                    key={index}
                    className={`categories-item ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => onCategoryClick(category)}
                    >
                        {category}
                </button>
            
            ))}
        </div>
    );
}