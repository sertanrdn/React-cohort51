import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { CategoryList } from '../components/CategoryList';
import { ProductList } from '../components/ProductList';
import { fetchCategories,fetchProducts } from '../services/fetchData.js';

export function HomePage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchProducts(selectedCategory);
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, [selectedCategory]);

  useEffect(() => {
    async function loadCategories() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadCategories();
  }, []);


  const handleCategorySelection = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
  }

  return (
    <div className="App">
      <Header />
      {isLoading && <p>Loading data...</p>}
      {error && <p>{error}</p>}
      <CategoryList 
        categories={categories}
        onCategoryClick={handleCategorySelection}
        selectedCategory={selectedCategory}
      />
      <ProductList products={products}/>
    </div>
  );
}

