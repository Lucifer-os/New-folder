# Frontend Setup and Integration Instructions

This document provides detailed step-by-step instructions to set up and run the frontend for the E-commerce website, and how to integrate it dynamically with the backend APIs.

## Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)
- Backend server running (see README-backend.md for backend setup)

## Setup Steps

1. **Navigate to the frontend directory:**

```bash
cd ecommerce-frontend
```

2. **Open the frontend pages:**

- You can open any `.html` file directly in your browser to view the pages.
- For example, open `index.html` to view the home page.

## Dynamic Integration with Backend APIs

The frontend is prepared for dynamic integration with the backend REST APIs. The following instructions and comments in the code will guide you:

- **API Base URL:**  
  The backend server runs on `http://localhost:5000` by default.  
  Update the `API_BASE_URL` variable in the JavaScript files to match your backend URL if different.

- **Fetching Products:**  
  The `shop.html` page includes JavaScript code to fetch product data dynamically from the backend API endpoint `/api/products`.  
  This replaces static product listings with dynamic content.

- **User Authentication:**  
  Login and signup forms can be connected to backend authentication endpoints `/api/auth/login` and `/api/auth/signup` respectively.  
  Use JavaScript `fetch` or `axios` to send form data and handle responses.

- **Cart and Wishlist:**  
  Cart and wishlist pages can fetch and update data via `/api/cart` and `/api/wishlist` endpoints.  
  JavaScript code can be added to handle adding/removing items and displaying current cart/wishlist.

- **Order Processing:**  
  Checkout page can be connected to `/api/orders` to create and manage orders.

## Example: Fetching Products in shop.html

```js
const API_BASE_URL = 'http://localhost:5000';

async function fetchProducts() {
  try {
    const response = await fetch(\`\${API_BASE_URL}/api/products\`);
    const products = await response.json();
    // Render products dynamically in the page
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

fetchProducts();
```

## Notes

- The frontend uses TailwindCSS via CDN for styling.
- JavaScript code for dynamic data fetching should be added in `<script>` tags or separate `.js` files.
- Ensure CORS is enabled on the backend to allow API requests from the frontend.

## Running the Frontend with Backend

1. Start the backend server (see README-backend.md).
2. Open frontend pages in the browser.
3. The frontend will fetch data dynamically from the backend APIs as implemented.

## License

This frontend code is open source and free to use.
