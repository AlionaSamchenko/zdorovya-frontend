import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CalculatorPage from './pages/CalculatorPage';
import WaterBalancePage from './pages/WaterBalancePage';
import ProductsPage from './pages/ProductsPage';
import DietsPage from './pages/DietsPage';
import ActivityPage from './pages/ActivityPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
   <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={< HomePage />} />
          <Route path="/calculatorpage" element={< CalculatorPage />} />
          <Route path="/waterbalancepage" element={< WaterBalancePage />} />
          <Route path="/productspage" element={< ProductsPage />} />
          <Route path="/dietspage" element={< DietsPage />} />
          <Route path="/activitypage" element={< ActivityPage />} />
        </Routes>
      </main>
      <Footer />
   </BrowserRouter>
  );
}

export default App;


