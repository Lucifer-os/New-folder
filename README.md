# E-commerce Website

This project is a full-stack e-commerce website with a Node.js + Express backend and a static frontend styled with TailwindCSS.

## Features

- Backend:
  - Node.js with Express server
  - MongoDB models for users, products, categories, cart, wishlist, orders
  - REST API endpoints for products, authentication, cart, wishlist, orders, and admin product management

- Frontend:
  - Static HTML pages styled with TailwindCSS
  - Pages: Home, Shop (with filters), Product Detail (20 separate product pages), Cart, Wishlist, Checkout, Contact, About, Login/Signup, Admin Dashboard
  - Sticky navigation bar on all pages

- Sample data for 20 electronic products in 5 categories

## Setup Instructions

### Backend

1. Navigate to the backend directory:

```bash
cd ecommerce-backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the `ecommerce-backend` directory with the following content:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret_key
```

Replace `your_mongodb_connection_string` with your MongoDB connection URI and `your_jwt_secret_key` with a secure secret key.

4. Start the backend server:

```bash
npm run dev
```

The backend server will run on `http://localhost:5000`.

### Frontend

1. Open the `ecommerce-frontend` directory.

2. Open any HTML file in a browser to view the frontend pages. For example, open `index.html` to view the home page.

### Notes

- The frontend is static and does not yet have dynamic integration with the backend API.
- Authentication, cart, wishlist, and order functionalities are backend-ready but require frontend integration.
- Admin dashboard is a placeholder for future admin features.

## Deployment

- Deploy the backend to a Node.js hosting platform (e.g., Heroku, DigitalOcean).
- Serve the frontend as static files on any static hosting service (e.g., Netlify, Vercel).

## License

This project is open source and free to use.
