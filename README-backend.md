# Backend Setup and Running Instructions

This document provides detailed step-by-step instructions to set up and run the backend server for the E-commerce website.

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- MongoDB instance (local or cloud)

## Setup Steps

1. **Navigate to the backend directory:**

```bash
cd ecommerce-backend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create a `.env` file in the `ecommerce-backend` directory with the following content:**

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret_key
```

- Replace `your_mongodb_connection_string` with your MongoDB connection URI.
- Replace `your_jwt_secret_key` with a secure secret key for JWT authentication.

4. **Start the backend server:**

```bash
npm run dev
```

- The server will start on `http://localhost:5000` by default.

## API Endpoints

- `/api/auth` - Authentication routes (login, signup)
- `/api/products` - Product management routes
- `/api/cart` - Cart management routes
- `/api/wishlist` - Wishlist management routes
- `/api/orders` - Order management routes

Refer to the source code in the `routes` and `controllers` directories for detailed API functionality.

## Notes

- Ensure MongoDB is running and accessible.
- Use tools like Postman to test API endpoints.
- Secure your `.env` file and do not commit it to version control.

## Troubleshooting

- If the server fails to connect to MongoDB, verify your connection string and network access.
- Check for missing dependencies by running `npm install` again.
- Review server logs for error messages.

## License

This backend code is open source and free to use.
