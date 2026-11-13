import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array of cart items: { id, name, image, price, quantity, category }
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add product to cart or increment quantity if already exists
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id: item.id,
          name: item.name,
          image: item.image,
          price: Number(item.price),
          quantity: 1,
          category: item.category || 'Plants',
        });
      }
    },

    // Remove product completely from cart
    removeFromCart: (state, action) => {
      const id = typeof action.payload === 'object' ? action.payload.id : action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },

    // Increase product quantity by 1
    increaseQuantity: (state, action) => {
      const id = typeof action.payload === 'object' ? action.payload.id : action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.quantity += 1;
      }
    },

    // Decrease product quantity by 1 (minimum 1, does not allow zero or negative)
    decreaseQuantity: (state, action) => {
      const id = typeof action.payload === 'object' ? action.payload.id : action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        }
      }
    },

    // Clear entire cart
    clearCart: (state) => {
      state.items = [];
    },

    // Coursera rubric backward-compatibility aliases
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id: item.id,
          name: item.name,
          image: item.image,
          price: Number(item.price),
          quantity: 1,
          category: item.category || 'Plants',
        });
      }
    },
    removeItem: (state, action) => {
      const id = typeof action.payload === 'object' ? action.payload.id : action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.quantity = amount;
      }
    },
  },
});

// Action creators
export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  addItem,
  removeItem,
  updateQuantity,
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectTotalPrice = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
export const selectCartItemById = (id) => (state) =>
  state.cart.items.find((item) => item.id === id);

export default cartSlice.reducer;
