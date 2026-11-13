import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Target,
  Eye,
  ShieldCheck,
  Truck,
  Leaf,
  Wind,
  Smile,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <div className="badge-pill">
            <Leaf size={16} />
            <span>Rooted in Nature & Passion</span>
          </div>
          <h1>About Paradise Nursery</h1>
          <p className="hero-description">
            Transforming urban spaces into vibrant, serene green sanctuaries. We
            bring the tranquility of botanical beauty straight to your doorstep.
          </p>
        </div>
      </section>

      <div className="about-content-wrapper">
        {/* Company Introduction */}
        <section className="about-section intro-section">
          <div className="intro-grid">
            <div className="intro-text">
              <span className="section-subtitle">Who We Are</span>
              <h2>Cultivating Green Spaces, Enhancing Everyday Lives</h2>
              <p>
                Founded with an unwavering love for botany and urban wellness,{' '}
                <strong>Paradise Nursery</strong> is your premier online destination
                for curated indoor, air-purifying, and succulent plants. We believe
                that everyone deserves to experience the calming presence and revitalizing
                energy of nature in their home or workplace.
              </p>
              <p>
                From humble beginnings as a family-owned botanical greenhouse, we have
                grown into a vibrant community of plant enthusiasts. Every plant we
                nurture is hand-selected, organically potted, and delivered with utmost
                care to ensure it thrives in your personal paradise.
              </p>
              <div className="intro-highlights">
                <div className="highlight-item">
                  <span className="highlight-number">10k+</span>
                  <span className="highlight-label">Happy Plant Parents</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">50+</span>
                  <span className="highlight-label">Curated Varieties</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">100%</span>
                  <span className="highlight-label">Healthy Guarantee</span>
                </div>
              </div>
            </div>
            <div className="intro-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=800&q=80"
                alt="Greenhouse interior full of healthy plants"
                className="intro-image"
                loading="lazy"
              />
              <div className="intro-floating-card">
                <Sparkles className="card-icon" size={24} />
                <div>
                  <h4>100% Organic Care</h4>
                  <p>Sustainably grown with zero harsh chemicals</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="about-section mission-vision-section">
          <div className="mission-vision-grid">
            <div className="mv-card mission-card">
              <div className="mv-icon-box">
                <Target size={32} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To make plant parenting accessible, joyful, and sustainable for everyone.
                We strive to bridge the gap between human lifestyle and the natural world
                by delivering premium, healthy flora alongside expert botanical guidance.
              </p>
            </div>

            <div className="mv-card vision-card">
              <div className="mv-icon-box">
                <Eye size={32} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To cultivate greener, healthier cities where every apartment, office,
                and home is infused with the restorative serenity of botanical life,
                fostering environmental mindfulness and mental wellness.
              </p>
            </div>
          </div>
        </section>

        {/* Indoor Plants Benefits */}
        <section className="about-section benefits-section">
          <div className="section-header">
            <span className="section-subtitle">Nature’s Superpowers</span>
            <h2>Why Indoor Plants Matter</h2>
            <p className="section-description">
              Integrating greenery into your indoor spaces provides profound physical,
              mental, and aesthetic rewards.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <Wind size={28} />
              </div>
              <h4>Air Purification</h4>
              <p>
                Plants absorb harmful VOCs like formaldehyde and benzene, releasing pure
                oxygen and naturally humidifying dry indoor air.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Smile size={28} />
              </div>
              <h4>Stress Reduction & Focus</h4>
              <p>
                Studies show that caring for living plants reduces cortisol levels, sharpens
                mental concentration, and elevates daily moods.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Sparkles size={28} />
              </div>
              <h4>Aesthetic Elevation</h4>
              <p>
                Lush foliage breathes organic texture, warmth, and architectural elegance
                into any minimalist, modern, or classic decor.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Heart size={28} />
              </div>
              <h4>Restorative Wellness</h4>
              <p>
                Surrounding yourself with living green companions reconnects you with
                nature's rhythms, encouraging mindfulness and calm.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Paradise Nursery */}
        <section className="about-section why-choose-section">
          <div className="section-header">
            <span className="section-subtitle">The Paradise Difference</span>
            <h2>Why Choose Paradise Nursery?</h2>
            <p className="section-description">
              We stand apart through our dedication to plant health, eco-friendly practices,
              and dedicated customer support.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">
                <ShieldCheck size={30} />
              </div>
              <h4>Guaranteed Healthy Arrival</h4>
              <p>
                Every botanical specimen undergoes rigorous quality inspection before being
                securely packaged in our specialized breathable transit containers.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <Truck size={30} />
              </div>
              <h4>Fast & Safe Delivery</h4>
              <p>
                Swift door-to-door delivery across India with temperature-insulated
                packaging that prevents soil spillage and root shock.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <Leaf size={30} />
              </div>
              <h4>Lifelong Care Support</h4>
              <p>
                Get ongoing plant parenting advice, watering reminders, and troubleshooting
                tips from our seasoned horticultural team.
              </p>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="about-cta-banner">
          <div className="cta-content">
            <h2>Ready to Build Your Indoor Jungle?</h2>
            <p>
              Explore our diverse collections of indoor, air-purifying, and succulent plants
              today and bring green vitality home.
            </p>
            <Link to="/plants" className="btn btn-primary cta-btn">
              <span>Browse Plant Catalog</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
