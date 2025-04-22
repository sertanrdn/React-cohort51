import React, { useState } from 'react'
import { Header } from '../components/Header'
import { CategoryList } from '../components/CategoryList';
import { ProductList } from '../components/ProductList';
import productsData from '../fake-data/all-products';
import categoriesData from '../fake-data/all-categories';


export function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelection = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
  }

  const filterProducts = (products, selectedCategory) => {
    if (!selectedCategory) return products;
    
    const categoryMatch = selectedCategory
    .replace("FAKE: ", "")
    .trim()
    .toLowerCase();

    return productsData.filter((product) =>
      product.category.toLowerCase().includes(categoryMatch)
    );
  }

  const filteredProducts = filterProducts(productsData, selectedCategory);

  return (
    <div className="App">
      <Header />
      <CategoryList 
        categories={categoriesData}
        onCategoryClick={handleCategorySelection}
        selectedCategory={selectedCategory}
      />
      <ProductList products={filteredProducts}/>
    </div>
  );
}

