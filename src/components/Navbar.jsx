import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from '../redux/CartSlice';
import { ShoppingBag, Sprout, Menu, X, Info, Home } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalQuantity = useSelector(selectTotalQuantity);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar-container">
      <nav className="navbar">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand">
          <div className="brand-icon-wrapper">
            <Sprout className="brand-icon" size={28} />
          </div>
          <div className="brand-text">
            <span className="brand-title">Paradise Nursery</span>
            <span className="brand-subtitle">Where Green Meets Serenity</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="nav-links desktop-links">
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            <Home size={18} />
            <span>Home</span>
          </Link>

          <Link
            to="/plants"
            className={`nav-link ${isActive('/plants') ? 'active' : ''}`}
          >
            <Sprout size={18} />
            <span>Plants</span>
          </Link>

          <Link
            to="/about"
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            <Info size={18} />
            <span>About Us</span>
          </Link>

          {/* Cart Icon with Dynamic Badge */}
          <Link
            to="/cart"
            className={`nav-cart-btn ${isActive('/cart') ? 'active' : ''}`}
            aria-label="View Shopping Cart"
          >
            <div className="cart-icon-wrapper">
              <ShoppingBag size={22} />
              {totalQuantity > 0 && (
                <span className="cart-badge animate-pop" key={totalQuantity}>
                  {totalQuantity}
                </span>
              )}
            </div>
            <span className="cart-label">Cart</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <Link
            to="/"
            className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Home size={20} />
            <span>Home</span>
          </Link>

          <Link
            to="/plants"
            className={`mobile-nav-link ${isActive('/plants') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Sprout size={20} />
            <span>Plants Collection</span>
          </Link>

          <Link
            to="/about"
            className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Info size={20} />
            <span>About Paradise Nursery</span>
          </Link>

          <Link
            to="/cart"
            className={`mobile-nav-link mobile-cart-link ${
              isActive('/cart') ? 'active' : ''
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="cart-icon-wrapper">
              <ShoppingBag size={20} />
              {totalQuantity > 0 && (
                <span className="cart-badge">{totalQuantity}</span>
              )}
            </div>
            <span>Shopping Cart ({totalQuantity} items)</span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
