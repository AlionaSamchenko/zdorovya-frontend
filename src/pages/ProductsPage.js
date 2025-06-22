import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './CalculatorPage.css';
import './ProductsPage.css';

function ProductsPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [currentMeal, setCurrentMeal] = useState('сніданок');
  const [selections, setSelections] = useState({
    сніданок: [],
    обід: [],
    вечеря: [],
  });

  const [totals, setTotals] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const fetchProducts = useCallback(() => {
    const url = `http://localhost:5000/protucts?page=${currentPage}&search=${searchQuery}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
        setTotalPages(data.totalPages);
      })
      .catch(error => console.error('Помилка при завантаженні продуктів:', error));
  }, [currentPage, searchQuery]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleProductSelect = (product, isSelected) => {
    setShowResults(false);
    setSelections(prevSelections => {
      const currentMealProducts = prevSelections[currentMeal];
      let newMealProducts;
      if (isSelected) {
        newMealProducts = [...currentMealProducts, product];
      } else {
        newMealProducts = currentMealProducts.filter(p => p._id !== product._id);
      }
      return {
        ...prevSelections,
        [currentMeal]: newMealProducts,
      };
    });
  };

  const handleConfirmSelection = () => {
    const selectionsWithIds = {
      сніданок: selections.сніданок.map(p => p._id),
      обід: selections.обід.map(p => p._id),
      вечеря: selections.вечеря.map(p => p._id),
    };

    fetch('http://localhost:5000/protucts/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ selections: selectionsWithIds }),
    })
      .then(response => response.json())
      .then(data => {
        setTotals({
          сніданок: data.mealTotals.сніданок,
          обід: data.mealTotals.обід,
          вечеря: data.mealTotals.вечеря,
          grandTotal: data.grandTotal,
        });
        setShowResults(true);
      })
      .catch(error => console.error('Помилка при обчисленні на сервері:', error));
  };

  const nextPage = () => setCurrentPage(prev => (prev < totalPages ? prev + 1 : prev));
  const prevPage = () => setCurrentPage(prev => (prev > 1 ? prev - 1 : prev));

  const mealOptions = ['сніданок', 'обід', 'вечеря'];

  return (
    <div className="calculator-container-with-images">
      <img src="/water_balan.png" alt="Ліва сторона" className="side-image left-image" />

      <div className="calculator-container">
        <h2 className="calculator-title">Калорійність продуктів</h2>
        <p className="calculator-info">
          Слідкуйте за своїм харчуванням разом з нами. Обчислення проводяться на 100 грамів продукту. Виберайте продукт та прийом їжі та отримуйте свій індивідуальний розрахунок спожитих речовин.
        </p>
        <div className="calculator-form">
          <div className="pp-search-section">
            <input
              type="text"
              placeholder="Пошук продукту за назвою..."
              value={searchQuery}
              onChange={e => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
          <div className="pp-meal-selection">
            {mealOptions.map(meal => (
              <label key={meal} className={`pp-meal-option ${currentMeal === meal ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="meal"
                  value={meal}
                  checked={currentMeal === meal}
                  onChange={e => setCurrentMeal(e.target.value)}
                />
                {meal.charAt(0).toUpperCase() + meal.slice(1)}
              </label>
            ))}
          </div>
          <div className="pp-product-list">
            {products.map(product => (
              <div key={product._id} className="pp-product-item">
                <label>
                  <input
                    type="checkbox"
                    checked={selections[currentMeal].some(p => p._id === product._id)}
                    onChange={e => handleProductSelect(product, e.target.checked)}
                  />
                  {`${product.name} (на 100г: К: ${product.calories}, Б: ${product.protein}, Ж: ${product.fat}, В: ${product.carbs})`}
                </label>
              </div>
            ))}
            {totalPages > 1 && (
              <div className="pp-pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>Назад</button>
                <span>{currentPage} / {totalPages}</span>
                <button onClick={nextPage} disabled={currentPage === totalPages}>Далі</button>
              </div>
            )}
          </div>
          <button className="calculate-button" onClick={handleConfirmSelection} style={{ width: '100%', marginTop: '20px' }}>
            Розрахувати калорійність
          </button>
          {showResults && totals && (
            <div className="pp-results-container">
              {mealOptions.map(meal =>
                selections[meal].length > 0 && (
                  <div className="result-block" key={meal}>
                    <h3>{meal.charAt(0).toUpperCase() + meal.slice(1)}</h3>
                    <ul className="pp-selected-products-list">
                      {selections[meal].map(p => <li key={p._id}>{p.name}</li>)}
                    </ul>
                    <table className="pp-totals-table">
                      <tbody>
                        <tr><td>Калорії:</td><td>{totals[meal].calories.toFixed(2)}</td></tr>
                        <tr><td>Білки:</td><td>{totals[meal].protein.toFixed(2)} г</td></tr>
                        <tr><td>Жири:</td><td>{totals[meal].fat.toFixed(2)} г</td></tr>
                        <tr><td>Вуглеводи:</td><td>{totals[meal].carbs.toFixed(2)} г</td></tr>
                      </tbody>
                    </table>
                  </div>
                )
              )}
              <div className="result-block grand-total">
                <h3>Разом за день</h3>
                <table className="pp-totals-table">
                  <tbody>
                    <tr><td>Калорії:</td><td>{totals.grandTotal.calories.toFixed(2)}</td></tr>
                    <tr><td>Білки:</td><td>{totals.grandTotal.protein.toFixed(2)} г</td></tr>
                    <tr><td>Жири:</td><td>{totals.grandTotal.fat.toFixed(2)} г</td></tr>
                    <tr><td>Вуглеводи:</td><td>{totals.grandTotal.carbs.toFixed(2)} г</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          <button className="back-button" onClick={() => navigate('/')}>На головну</button>
        </div>
      </div>

      <img src="/water_balan.png" alt="Права сторона" className="side-image right-image" />
    </div>
  );
}

export default ProductsPage;