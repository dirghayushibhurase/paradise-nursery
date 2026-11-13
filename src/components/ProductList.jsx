import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from '../redux/CartSlice';
import {
  Check,
  ShoppingCart,
  Search,
  Filter,
  Sparkles,
  Droplets,
  Sun,
  ShieldAlert,
} from 'lucide-react';

export const plantsData = [
  // Category 1: Indoor Plants (6 plants)
  {
    id: 'indoor-1',
    name: 'Monstera Deliciosa',
    category: 'Indoor Plants',
    price: 699,
    description: 'Iconic Swiss Cheese plant with dramatic split leaves that brings an instant tropical vibe indoors.',
    light: 'Bright, indirect light',
    water: 'Weekly',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'indoor-2',
    name: 'Fiddle Leaf Fig',
    category: 'Indoor Plants',
    price: 999,
    description: 'Stately architectural indoor tree with large, lustrous violin-shaped leaves for statement corners.',
    light: 'Bright filtered sunlight',
    water: 'When top soil is dry',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'indoor-3',
    name: 'ZZ Plant',
    category: 'Indoor Plants',
    price: 499,
    description: 'Virtually indestructible foliage with wand-like stems and glossy deep green leaves. Thrives on neglect.',
    light: 'Low to bright indirect',
    water: 'Every 2-3 weeks',
    image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'indoor-4',
    name: 'Golden Pothos',
    category: 'Indoor Plants',
    price: 349,
    description: 'Lush cascading vine with heart-shaped leaves variegated in golden yellow. Perfect for hanging pots.',
    light: 'Tolerates low light',
    water: 'Weekly',
    image: 'https://images.unsplash.com/photo-1596724806653-568eb9a341f2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'indoor-5',
    name: 'Cast Iron Plant',
    category: 'Indoor Plants',
    price: 599,
    description: 'Extremely resilient deep green foliage that can survive deep shade, drafts, and variable temperatures.',
    light: 'Deep shade to low light',
    water: 'Every 10-14 days',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'indoor-6',
    name: 'Rubber Plant Burgundy',
    category: 'Indoor Plants',
    price: 649,
    description: 'Bold ornamental tree showcasing thick, leathery leaves with rich burgundy and bronze hues.',
    light: 'Medium to bright light',
    water: 'When top 2 inches dry',
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80',
  },

  // Category 2: Air Purifying Plants (6 plants)
  {
    id: 'air-1',
    name: 'Snake Plant Laurentii',
    category: 'Air Purifying Plants',
    price: 499,
    description: 'NASA-certified champion air purifier that releases oxygen at night and neutralizes indoor toxins.',
    light: 'Any light level',
    water: 'Every 2-3 weeks',
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'air-2',
    name: 'Peace Lily',
    category: 'Air Purifying Plants',
    price: 549,
    description: 'Elegant dark green leaves with graceful white flower spathes. Effectively filters harmful airborne benzene.',
    light: 'Medium, indirect light',
    water: 'Keep soil moist',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'air-3',
    name: 'Spider Plant',
    category: 'Air Purifying Plants',
    price: 299,
    description: 'Hardy air-filtering plant with arching variegated foliage that produces delightful baby plantlets.',
    light: 'Bright indirect light',
    water: 'Weekly',
    image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'air-4',
    name: 'Boston Fern',
    category: 'Air Purifying Plants',
    price: 449,
    description: 'Feathery, arching fronds that act as a natural air humidifier and remove indoor pollutants.',
    light: 'Shaded, indirect light',
    water: 'Regular, high humidity',
    image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'air-5',
    name: 'Areca Palm',
    category: 'Air Purifying Plants',
    price: 799,
    description: 'Feathery graceful fronds that purify toluene and xylene from indoor air while adding a tropical feel.',
    light: 'Bright, indirect light',
    water: 'Moderate watering',
    image: 'https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'air-6',
    name: 'Aloe Vera',
    category: 'Air Purifying Plants',
    price: 399,
    description: 'Multipurpose healing succulent that cleanses air of formaldehyde while yielding medicinal soothing gel.',
    light: 'Direct or bright sunlight',
    water: 'Bi-weekly',
    image: 'https://images.unsplash.com/photo-1567689265664-1c48de61db0b?auto=format&fit=crop&w=600&q=80',
  },

  // Category 3: Succulent Plants (6 plants)
  {
    id: 'succulent-1',
    name: 'Jade Plant',
    category: 'Succulent Plants',
    price: 449,
    description: 'Symbol of good luck and prosperity featuring plump, glossy jade-green leaves on miniature woody stems.',
    light: 'Direct morning sunlight',
    water: 'Sparse watering',
    image: 'https://images.unsplash.com/photo-1509587584298-0f3b313a4890?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'succulent-2',
    name: 'Echeveria Elegans',
    category: 'Succulent Plants',
    price: 349,
    description: 'Exquisite rosette-forming succulent with delicate silvery-blue leaves shaped like living lotus blossoms.',
    light: 'Bright direct sunlight',
    water: 'Every 2-3 weeks',
    image: 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'succulent-3',
    name: 'Zebra Haworthia',
    category: 'Succulent Plants',
    price: 399,
    description: 'Compact architectural succulent adorned with striking white horizontal raised ridges on deep green leaves.',
    light: 'Partial shade to bright',
    water: 'When completely dry',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'succulent-4',
    name: 'String of Pearls',
    category: 'Succulent Plants',
    price: 529,
    description: 'Charming succulent featuring cascading tendrils of small, spherical, pea-shaped emerald green leaves.',
    light: 'Bright indirect light',
    water: 'Allow soil to dry',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'succulent-5',
    name: "Burro's Tail Sedum",
    category: 'Succulent Plants',
    price: 479,
    description: 'Unique trailing succulent with densely overlapping silvery blue-green bean-shaped plump leaves.',
    light: 'Bright indirect to direct',
    water: 'Every 2 weeks',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'succulent-6',
    name: 'Crown of Thorns',
    category: 'Succulent Plants',
    price: 499,
    description: 'Drought-tolerant flowering succulent that produces charming crimson blossoms throughout the year.',
    light: 'Bright direct light',
    water: 'Moderate when dry',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80',
  },
];

const fallbackImage =
  'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [notification, setNotification] = useState(null);

  // Check whether a plant is already in the cart
  const isPlantInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  // Handle adding plant to cart
  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    setNotification(`"${plant.name}" added to cart!`);
    setTimeout(() => {
      setNotification(null);
    }, 2500);
  };

  // Filter plants by category and search term
  const filteredPlants = plantsData.filter((plant) => {
    const matchesCategory =
      selectedCategory === 'All' || plant.category === selectedCategory;
    const matchesSearch =
      plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    'All',
    'Indoor Plants',
    'Air Purifying Plants',
    'Succulent Plants',
  ];

  return (
    <div className="product-list-container">
      {/* Toast Notification */}
      {notification && (
        <div className="toast-notification">
          <Check size={18} />
          <span>{notification}</span>
        </div>
      )}

      {/* Page Header */}
      <div className="products-hero">
        <div className="products-hero-content">
          <span className="badge-pill">
            <Sparkles size={16} /> Hand-Nurtured Botanicals
          </span>
          <h1>Our Plant Collection</h1>
          <p>
            Explore our diverse array of premium indoor greenery, air-purifying
            marvels, and drought-hardy succulents.
          </p>
        </div>
      </div>

      <div className="products-main-content">
        {/* Filter and Search Controls */}
        <div className="filter-controls-bar">
          {/* Category Tabs */}
          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-tab-btn ${
                  selectedCategory === category ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="search-box">
            <Search className="search-icon" size={18} />
            <input
              type="text"
              placeholder="Search plants by name or trait..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search plants"
            />
            {searchQuery && (
              <button
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Results summary */}
        <div className="results-status">
          <span>
            Showing <strong>{filteredPlants.length}</strong> plants
            {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>
        </div>

        {/* Grouped or Grid Display */}
        {filteredPlants.length === 0 ? (
          <div className="no-results-box">
            <ShieldAlert size={48} className="no-results-icon" />
            <h3>No plants found</h3>
            <p>Try searching for a different plant name or reset your category filter.</p>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : selectedCategory === 'All' && !searchQuery ? (
          // Grouped by Category View
          categories
            .filter((cat) => cat !== 'All')
            .map((catName) => {
              const catPlants = plantsData.filter((p) => p.category === catName);
              return (
                <section key={catName} className="category-section">
                  <div className="category-section-header">
                    <h2>{catName}</h2>
                    <span className="category-count-badge">
                      {catPlants.length} Varieties Available
                    </span>
                  </div>

                  <div className="plants-grid">
                    {catPlants.map((plant) => {
                      const inCart = isPlantInCart(plant.id);
                      return (
                        <div key={plant.id} className="plant-card">
                          <div className="plant-image-container">
                            <img
                              src={plant.image}
                              alt={plant.name}
                              className="plant-image"
                              loading="lazy"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = fallbackImage;
                              }}
                            />
                            <span className="plant-category-badge">
                              {plant.category}
                            </span>
                          </div>

                          <div className="plant-details">
                            <h3 className="plant-name">{plant.name}</h3>
                            <p className="plant-description">{plant.description}</p>

                            <div className="plant-care-tags">
                              <span className="care-tag">
                                <Sun size={13} /> {plant.light}
                              </span>
                              <span className="care-tag">
                                <Droplets size={13} /> {plant.water}
                              </span>
                            </div>

                            <div className="plant-card-footer">
                              <div className="plant-price-wrap">
                                <span className="price-label">Price</span>
                                <span className="plant-price">
                                  ₹{plant.price.toLocaleString('en-IN')}
                                </span>
                              </div>

                              <button
                                className={`btn add-to-cart-btn ${
                                  inCart ? 'btn-disabled' : 'btn-primary'
                                }`}
                                onClick={() => handleAddToCart(plant)}
                                disabled={inCart}
                                aria-label={
                                  inCart
                                    ? `${plant.name} already added to cart`
                                    : `Add ${plant.name} to cart`
                                }
                              >
                                {inCart ? (
                                  <>
                                    <Check size={18} />
                                    <span>Added to Cart</span>
                                  </>
                                ) : (
                                  <>
                                    <ShoppingCart size={18} />
                                    <span>Add to Cart</span>
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })
        ) : (
          // Filtered Grid View
          <div className="plants-grid">
            {filteredPlants.map((plant) => {
              const inCart = isPlantInCart(plant.id);
              return (
                <div key={plant.id} className="plant-card">
                  <div className="plant-image-container">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = fallbackImage;
                      }}
                    />
                    <span className="plant-category-badge">{plant.category}</span>
                  </div>

                  <div className="plant-details">
                    <h3 className="plant-name">{plant.name}</h3>
                    <p className="plant-description">{plant.description}</p>

                    <div className="plant-care-tags">
                      <span className="care-tag">
                        <Sun size={13} /> {plant.light}
                      </span>
                      <span className="care-tag">
                        <Droplets size={13} /> {plant.water}
                      </span>
                    </div>

                    <div className="plant-card-footer">
                      <div className="plant-price-wrap">
                        <span className="price-label">Price</span>
                        <span className="plant-price">
                          ₹{plant.price.toLocaleString('en-IN')}
                        </span>
                      </div>

                      <button
                        className={`btn add-to-cart-btn ${
                          inCart ? 'btn-disabled' : 'btn-primary'
                        }`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={inCart}
                        aria-label={
                          inCart
                            ? `${plant.name} already added to cart`
                            : `Add ${plant.name} to cart`
                        }
                      >
                        {inCart ? (
                          <>
                            <Check size={18} />
                            <span>Added to Cart</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart size={18} />
                            <span>Add to Cart</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
