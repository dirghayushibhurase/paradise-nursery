# Paradise Nursery – Online Plant Shopping Application

An elegant, modern, responsive e-commerce web application built with **React**, **Vite**, **Redux Toolkit**, and **React Router DOM**. Paradise Nursery brings botanical serenity to plant enthusiasts, offering hand-nurtured indoor plants, air-purifying varieties, and resilient succulents with seamless shopping cart management.

---

## 🌿 Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Project Folder Structure](#-project-folder-structure)
- [Installation & Setup](#-installation--setup)
- [Available Commands](#-available-commands)
- [Shopping Cart Architecture & Redux Workflow](#-shopping-cart-architecture--redux-workflow)
- [Application Pages](#-application-pages)
- [Screenshots & Visual Preview](#-screenshots--visual-preview)
- [License & Acknowledgements](#-license--acknowledgements)

---

## 🌺 Project Overview

**Paradise Nursery** is an online plant boutique designed to help homeowners and office dwellers create their own tranquil green sanctuaries. Users can browse distinct botanical categories, explore plant care requirements, filter and search through a rich catalog of 18+ unique plants, and manage their shopping cart dynamically with real-time price and quantity synchronization.

- 🌐 **Live Demo**: [https://dirghayushibhurase.github.io/paradise-nursery/](https://dirghayushibhurase.github.io/paradise-nursery/)
- 💻 **GitHub Repository**: [https://github.com/dirghayushibhurase/paradise-nursery](https://github.com/dirghayushibhurase/paradise-nursery)

---

## ✨ Key Features

1. **Welcoming Landing Page**:
   - Nature-inspired aesthetics with high-resolution botanical imagery.
   - Welcoming heading *"Bring Nature Home – Where Green Meets Serenity"*.
   - Prominent **Get Started** button navigating straight to the curated collection.
   - Highlighting key guarantees: 100% Organically Grown, Safe Express Delivery, and Healthy Arrival.

2. **Categorized Plant Catalog (18+ Unique Plants)**:
   - **Indoor Plants**: Monstera Deliciosa, Fiddle Leaf Fig, ZZ Plant, Golden Pothos, Cast Iron Plant, Rubber Plant Burgundy.
   - **Air Purifying Plants**: Snake Plant Laurentii, Peace Lily, Spider Plant, Boston Fern, Areca Palm, Aloe Vera.
   - **Succulent Plants**: Jade Plant, Echeveria Elegans, Zebra Haworthia, String of Pearls, Burro's Tail Sedum, Crown of Thorns.
   - For every plant: high-resolution image, botanical name, description, light/water requirements, price in Indian Rupees (₹), and action button.

3. **Dynamic Add to Cart Functionality**:
   - One-click addition to Redux global state.
   - State-aware button: Automatically disables once added, displaying **"Added to Cart"** with a confirmation checkmark.
   - Smooth floating notification toast confirming item additions.

4. **Category Filtering & Live Search**:
   - Real-time search by plant name or description.
   - Filter tabs: *All Plants*, *Indoor Plants*, *Air Purifying Plants*, *Succulent Plants*.
   - Dynamic counter showing the number of matched varieties.

5. **Complete Shopping Cart Management**:
   - Displays plant thumbnail, name, unit price, quantity controls, and subtotal per item.
   - **Increase (+)** and **Decrease (-)** quantity controls with subtotal recalculation.
   - Minimum quantity limit prevents zero or negative values.
   - **Delete Button** with trash icon to remove products entirely.
   - Order summary card calculating total plant count and total cart amount (₹).
   - **Continue Shopping** button routing back to the catalog.
   - **Checkout** button displaying a friendly *"Coming Soon! Checkout functionality will be available soon"* modal.
   - Empty cart state with intuitive call-to-action button.

6. **Interactive Global Navigation Bar**:
   - Brand logo with sprout icon.
   - Links to *Home*, *Plants*, and *About Us*.
   - Shopping bag icon with animated dynamic badge updating in real time.
   - Fully responsive hamburger navigation menu on mobile devices.

7. **Comprehensive About Us Page**:
   - Detailed story of Paradise Nursery.
   - Mission and Vision statements.
   - Health and wellness benefits of indoor plants (air purification, stress reduction, aesthetic elevation).
   - Paradise Nursery quality assurance pillars.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| **React 19** | Modern UI component library using functional components & hooks |
| **Vite 8** | Next-generation ultra-fast frontend build tool and dev server |
| **Redux Toolkit (@reduxjs/toolkit)** | Predictable state container for global cart management |
| **React Redux (react-redux)** | React bindings for Redux store and dispatchers |
| **React Router DOM 7** | Client-side routing and declarative page navigation |
| **Lucide React** | Clean, lightweight SVG icon system |
| **CSS3** | Custom nature-inspired responsive styling, CSS variables, flexbox, and CSS grid |

---

## 📁 Project Folder Structure

```
developing-frontend-and-react/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   └── react.svg
│   ├── components/
│   │   ├── AboutUs.jsx          # About Us page component
│   │   ├── CartItem.jsx         # Shopping cart page component
│   │   ├── Navbar.jsx           # Global sticky navigation bar
│   │   └── ProductList.jsx      # Plant listing with categories & filters
│   ├── redux/
│   │   ├── CartSlice.jsx        # Redux slice with reducers & selectors
│   │   └── store.js             # Redux store configuration
│   ├── App.css                  # Comprehensive custom stylesheet
│   ├── App.jsx                  # Main application router & landing page
│   ├── index.css                # Base reset & color variables
│   └── main.jsx                 # Application entry point with Redux Provider
├── index.html                   # HTML template with typography & metadata
├── package.json                 # Project dependencies and npm scripts
├── vite.config.js               # Vite build configuration
└── README.md                    # Project documentation
```

---

## 🚀 Installation & Setup

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your machine.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dirghayushibhurase/paradise-nursery.git
   cd paradise-nursery
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in your browser**:
   Navigate to `http://localhost:5173/` (or the URL output in your terminal).

---

## 💻 Available Commands

- `npm run dev`: Starts the Vite development server with Hot Module Replacement (HMR).
- `npm run build`: Compiles and bundles production-ready assets into the `dist/` directory.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs code linter checks.

---

## 🛒 Shopping Cart Architecture & Redux Workflow

The shopping cart state is managed globally through **Redux Toolkit** in `src/redux/CartSlice.jsx`.

### State Structure:
```javascript
{
  cart: {
    items: [
      {
        id: 'indoor-1',
        name: 'Monstera Deliciosa',
        category: 'Indoor Plants',
        price: 699,
        quantity: 2,
        image: 'https://images.unsplash.com/...'
      }
    ]
  }
}
```

### Action Reducers:
- **`addToCart` / `addItem`**: Adds an item to the cart. If already present, increments quantity by 1.
- **`removeFromCart` / `removeItem`**: Removes a specific plant from the cart by its unique `id`.
- **`increaseQuantity`**: Increments the quantity of an item by 1.
- **`decreaseQuantity`**: Decrements the quantity by 1 while ensuring quantity never drops below 1.
- **`clearCart`**: Clears all items from the cart.

### Selectors:
- **`selectCartItems`**: Retrieves the list of items in the cart.
- **`selectTotalQuantity`**: Computes total plant quantity across all cart items.
- **`selectTotalPrice`**: Calculates total cart price (`price × quantity` summed).

---

## 📱 Application Pages

1. **Home / Landing Page (`/`)**:
   - Engaging botanical hero background.
   - Nursery overview and "Get Started" call to action.
   - Highlights of organic cultivation, fast delivery, and guarantee.

2. **Plants / Product Listing Page (`/plants`)**:
   - 3 distinct categories: *Indoor Plants*, *Air Purifying Plants*, and *Succulents*.
   - 6 unique plants per category (18 total).
   - Search bar and category selector tabs.
   - State-reactive "Add to Cart" / "Added to Cart" buttons.

3. **Shopping Cart Page (`/cart`)**:
   - Detailed itemized list with real-time quantity modifiers.
   - Subtotal per product and comprehensive order summary.
   - "Continue Shopping" and "Checkout" actions.
   - "Coming Soon!" checkout confirmation modal.
   - Elegant empty cart state with direct link to catalog.

4. **About Us Page (`/about`)**:
   - Company background, mission, vision, and core values.
   - Educational guide on the health and environmental benefits of indoor plants.
   - Quality guarantee and customer care highlights.

---

## 📸 Screenshots & Visual Preview

### 1. Landing Page
```
+------------------------------------------------------------------------+
|  [Sprout] Paradise Nursery                     About Us  Plants  [Cart] |
|                                                                        |
|                 BRING NATURE HOME - WHERE GREEN MEETS SERENITY         |
|                                                                        |
|          Welcome to Paradise Nursery, your tranquil botanical oasis.   |
|          [ Get Started -> ]     [ Learn Our Story ]                    |
|                                                                        |
|  [100% Organically Grown]  [Safe Express Delivery]  [Healthy Guarantee]|
+------------------------------------------------------------------------+
```
*(Placeholder for high-resolution screenshot)*

### 2. Product Listing Page
```
+------------------------------------------------------------------------+
|  [All Categories]  [Indoor Plants]  [Air Purifying]  [Succulents]      |
|  [Search plants by name or trait...                          [Search]] |
|                                                                        |
|  +----------------------+ +----------------------+ +-----------------+ |
|  | [Monstera Deliciosa] | | [Snake Plant]        | | [Jade Plant]    | |
|  | Price: ₹699          | | Price: ₹499          | | Price: ₹449     | |
|  | [Added to Cart ✓]    | | [Add to Cart]        | | [Add to Cart]   | |
|  +----------------------+ +----------------------+ +-----------------+ |
+------------------------------------------------------------------------+
```
*(Placeholder for high-resolution screenshot)*

### 3. Shopping Cart & Summary Page
```
+------------------------------------------------------------------------+
|  Your Shopping Cart                                  [Clear Cart ↺]    |
|                                                                        |
|  [Plant Image] Monstera Deliciosa  ₹699   [-] 2 [+]  ₹1,398   [Trash]  |
|  [Plant Image] Snake Plant         ₹499   [-] 1 [+]  ₹499     [Trash]  |
|                                                                        |
|  Order Summary                                                         |
|  Total Plants: 3 items                                                 |
|  Standard Shipping: FREE (All India)                                   |
|  Total Cart Amount: ₹1,897                                             |
|  [ Checkout -> ]                                                       |
|  [ <- Continue Shopping ]                                              |
+------------------------------------------------------------------------+
```
*(Placeholder for high-resolution screenshot)*

---

## 📄 License & Acknowledgements

This project was developed for the **IBM / Coursera Front-End Developer Specialization** course assignment.

- Built by: **Dirghayushi Bhurase**
- Plant imagery curated from Unsplash under open royalty-free licenses.
- Icons by Lucide React.
