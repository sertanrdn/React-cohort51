import React from 'react'
import './App.css';
import { HomePage } from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { FavoritesProvider } from './context/FavoritesContext.jsx'; 
import { FavoritesPage } from './pages/FavoritesPage';
import { NavBar } from './components/NavBar.jsx';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product/:id' element={<ProductDetailsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
