import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-title">
          <img src="/logo.png" alt="Здорове життя" className="logo" />
          <h1 className="site-title">Здорове життя</h1>
        </div>

        <nav className="nav-buttons">
          <div className="burger-menu">
            <button className="burger-button" onClick={toggleMenu}>
              ☰
            </button>
            {isMenuOpen && (
              <div className="burger-dropdown">
                <Link to="/">Головна</Link>
                <Link to="/calculatorpage">Калькулятор калорій</Link>
                <Link to="/waterbalancepage">Водний баланс</Link>
                <Link to="/productspage">Калорійність продуктів</Link>
                <Link to="/dietspage">Дієти</Link>
                <Link to="/activitypage">Активність</Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;