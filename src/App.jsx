import React from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import {
  Sprout,
  ArrowRight,
  ShieldCheck,
  Truck,
  Leaf,
  Heart,
  Sparkles,
} from 'lucide-react';
import './App.css';

// Landing Page Component
export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Top Floating Mini Navbar on Landing */}
      <header className="landing-header">
        <div className="landing-brand">
          <div className="brand-icon-wrapper">
            <Sprout size={26} className="brand-icon" />
          </div>
          <span className="landing-brand-name">Paradise Nursery</span>
        </div>
        <nav className="landing-nav-links">
          <Link to="/about" className="landing-nav-item">
            About Us
          </Link>
          <Link to="/plants" className="landing-nav-item">
            Browse Plants
          </Link>
          <button
            onClick={() => navigate('/plants')}
            className="btn btn-outline landing-quick-btn"
          >
            Explore Catalog
          </button>
        </nav>
      </header>

      {/* Hero Section with Botanical Background Image */}
      <main className="landing-hero-section">
        <div className="landing-hero-backdrop"></div>
        <div className="landing-hero-content">
          <div className="landing-pill">
            <Sparkles size={16} />
            <span>Welcome to Botanical Heaven</span>
          </div>

          <h1 className="landing-title">
            Bring Nature Home – Where Green Meets Serenity
          </h1>

          <p className="landing-description">
            Welcome to <strong>Paradise Nursery</strong>, your tranquil botanical
            oasis. We curate healthy indoor greenery, air-purifying foliage, and
            resilient succulents that elevate your living spaces, purify your air,
            and bring natural tranquility to your everyday life.
          </p>

          <div className="landing-cta-group">
            <button
              onClick={() => navigate('/plants')}
              className="btn btn-primary btn-large get-started-btn"
              id="get-started-btn"
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </button>

            <Link to="/about" className="btn btn-secondary btn-large">
              <span>Learn Our Story</span>
            </Link>
          </div>

          {/* Key Feature Highlights */}
          <div className="landing-highlights-grid">
            <div className="highlight-pill">
              <Leaf size={18} />
              <span>100% Organically Grown</span>
            </div>
            <div className="highlight-pill">
              <Truck size={18} />
              <span>Safe Express Delivery</span>
            </div>
            <div className="highlight-pill">
              <ShieldCheck size={18} />
              <span>Healthy Arrival Guarantee</span>
            </div>
          </div>
        </div>
      </main>

      {/* Featured Teaser Strip */}
      <section className="landing-feature-strip">
        <div className="feature-strip-item">
          <div className="strip-icon-box">
            <Leaf size={24} />
          </div>
          <div>
            <h4>Indoor Plants</h4>
            <p>Lush foliage suited for living rooms and home offices</p>
          </div>
        </div>

        <div className="feature-strip-item">
          <div className="strip-icon-box">
            <Sparkles size={24} />
          </div>
          <div>
            <h4>Air Purifiers</h4>
            <p>NASA-proven specimens that filter VOCs and elevate oxygen</p>
          </div>
        </div>

        <div className="feature-strip-item">
          <div className="strip-icon-box">
            <Heart size={24} />
          </div>
          <div>
            <h4>Succulents</h4>
            <p>Hardy, drought-tolerant gems requiring minimal maintenance</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <p>
          © {new Date().getFullYear()} Paradise Nursery Inc. All rights reserved.
          Designed with ❤️ for plant lovers.
        </p>
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="app-root">
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Product Listing Page Route */}
        <Route
          path="/plants"
          element={
            <div className="page-wrapper">
              <Navbar />
              <main className="main-content">
                <ProductList />
              </main>
            </div>
          }
        />

        {/* Shopping Cart Page Route */}
        <Route
          path="/cart"
          element={
            <div className="page-wrapper">
              <Navbar />
              <main className="main-content">
                <CartItem />
              </main>
            </div>
          }
        />

        {/* About Us Page Route */}
        <Route
          path="/about"
          element={
            <div className="page-wrapper">
              <Navbar />
              <main className="main-content">
                <AboutUs />
              </main>
            </div>
          }
        />

        {/* Fallback Catch-all Route */}
        <Route
          path="*"
          element={
            <div className="page-wrapper">
              <Navbar />
              <main className="main-content">
                <LandingPage />
              </main>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
