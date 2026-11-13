import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  selectCartItems,
  selectTotalQuantity,
  selectTotalPrice,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from '../redux/CartSlice';
import {
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  CreditCard,
  ShoppingBag,
  Sparkles,
  CheckCircle2,
  X,
  RotateCcw,
} from 'lucide-react';

const CartItem = ({ onContinueShopping }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalPrice = useSelector(selectTotalPrice);

  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  // Navigation handler
  const handleContinueShopping = () => {
    if (typeof onContinueShopping === 'function') {
      onContinueShopping();
    } else {
      navigate('/plants');
    }
  };

  const handleCheckout = () => {
    setCheckoutModalOpen(true);
  };

  const fallbackImage =
    'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80';

  // Empty cart view
  if (cartItems.length === 0) {
    return (
      <div className="cart-page-container">
        <div className="empty-cart-card">
          <div className="empty-cart-icon-wrapper">
            <ShoppingBag size={56} className="empty-cart-icon" />
          </div>
          <h2>Your Botanical Cart is Empty</h2>
          <p>
            You haven't added any lovely plants to your cart yet. Explore our
            lush collection and discover the perfect green companions for your
            home or workspace.
          </p>
          <button
            onClick={handleContinueShopping}
            className="btn btn-primary btn-large explore-plants-btn"
          >
            <ArrowLeft size={18} />
            <span>Explore Plants Collection</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      {/* Checkout Coming Soon Modal */}
      {checkoutModalOpen && (
        <div className="modal-backdrop" onClick={() => setCheckoutModalOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="modal-close-btn"
              onClick={() => setCheckoutModalOpen(false)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <div className="modal-icon-wrapper">
              <Sparkles size={40} className="modal-icon" />
            </div>
            <h3>Coming Soon!</h3>
            <p className="modal-message">
              Checkout functionality will be available soon! Our botanical team
              is working on payment gateway integration. Thank you for shopping
              with Paradise Nursery!
            </p>
            <div className="modal-order-summary">
              <div className="summary-row">
                <span>Total Items:</span>
                <strong>{totalQuantity} plants</strong>
              </div>
              <div className="summary-row">
                <span>Total Cart Value:</span>
                <strong className="summary-price">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </strong>
              </div>
            </div>
            <button
              className="btn btn-primary btn-block"
              onClick={() => setCheckoutModalOpen(false)}
            >
              <CheckCircle2 size={18} />
              <span>Understood, Keep Browsing</span>
            </button>
          </div>
        </div>
      )}

      {/* Cart Page Header */}
      <div className="cart-header">
        <div className="cart-header-title">
          <h1>Your Shopping Cart</h1>
          <p>Review your selected botanical treasures and adjust quantities</p>
        </div>
        <button
          onClick={() => dispatch(clearCart())}
          className="btn btn-outline-danger clear-cart-btn"
          title="Remove all items from cart"
        >
          <RotateCcw size={16} />
          <span>Clear Cart</span>
        </button>
      </div>

      <div className="cart-layout">
        {/* Cart Items List */}
        <div className="cart-items-list">
          {cartItems.map((item) => {
            const itemSubtotal = item.price * item.quantity;

            return (
              <div key={item.id} className="cart-item-row">
                {/* Thumbnail */}
                <div className="cart-item-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = fallbackImage;
                    }}
                  />
                </div>

                {/* Info */}
                <div className="cart-item-info">
                  <span className="cart-item-category">{item.category}</span>
                  <h3 className="cart-item-name">{item.name}</h3>
                  <div className="cart-item-unit-price">
                    Unit Price: <strong>₹{item.price.toLocaleString('en-IN')}</strong>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="cart-quantity-section">
                  <label className="quantity-label">Quantity</label>
                  <div className="quantity-controls">
                    <button
                      className="qty-btn qty-decrease"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      disabled={item.quantity <= 1}
                      title={
                        item.quantity <= 1
                          ? 'Minimum quantity is 1 (use Delete to remove)'
                          : 'Decrease quantity'
                      }
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="qty-display">{item.quantity}</span>
                    <button
                      className="qty-btn qty-increase"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      title="Increase quantity"
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="cart-item-subtotal">
                  <span className="subtotal-label">Subtotal</span>
                  <span className="subtotal-amount">
                    ₹{itemSubtotal.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Delete Button */}
                <div className="cart-item-actions">
                  <button
                    className="delete-item-btn"
                    onClick={() => dispatch(removeFromCart(item.id))}
                    title={`Remove ${item.name} from cart`}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Summary Sidebar */}
        <div className="cart-summary-card">
          <h3>Order Summary</h3>
          <div className="summary-divider"></div>

          <div className="summary-details">
            <div className="summary-line">
              <span>Total Plants:</span>
              <span className="summary-value">
                {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'}
              </span>
            </div>
            <div className="summary-line">
              <span>Standard Shipping:</span>
              <span className="summary-value free-shipping">FREE (All India)</span>
            </div>
            <div className="summary-line">
              <span>Plant Protection Packaging:</span>
              <span className="summary-value free-shipping">FREE</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-line total-line">
              <span>Total Cart Amount:</span>
              <span className="total-cart-amount">
                ₹{totalPrice.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          <div className="summary-actions">
            <button
              onClick={handleCheckout}
              className="btn btn-primary btn-block checkout-btn"
            >
              <CreditCard size={18} />
              <span>Checkout (₹{totalPrice.toLocaleString('en-IN')})</span>
            </button>

            <button
              onClick={handleContinueShopping}
              className="btn btn-secondary btn-block continue-shopping-btn"
            >
              <ArrowLeft size={18} />
              <span>Continue Shopping</span>
            </button>
          </div>

          <div className="summary-perks">
            <div className="perk-item">
              <Sparkles size={16} />
              <span>Guaranteed safe transit in eco-friendly pots</span>
            </div>
            <div className="perk-item">
              <CheckCircle2 size={16} />
              <span>Free 7-day plant replacement warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Navigation Bar for Mobile */}
      <div className="cart-bottom-bar">
        <div className="bottom-bar-info">
          <span>Total: </span>
          <strong>₹{totalPrice.toLocaleString('en-IN')}</strong> ({totalQuantity} items)
        </div>
        <div className="bottom-bar-buttons">
          <button
            onClick={handleContinueShopping}
            className="btn btn-secondary btn-sm"
          >
            Continue
          </button>
          <button
            onClick={handleCheckout}
            className="btn btn-primary btn-sm"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
