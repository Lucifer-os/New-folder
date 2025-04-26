const mongoose = require('mongoose');
const Category = require('./models/Category');
const Product = require('./models/Product');

const MONGODB_URI = 'mongodb://localhost:27017/your_database_name'; // Replace with your actual MongoDB URI

const categoriesToCreate = [
  'Handbags & Clutches',
  'Wall Art & Mirrors',
  'Home Living Essentials',
  'Bohemian Furniture & Swings',
  'Gifting & Custom Sets'
];

async function updateCategoriesAndProducts() {
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    // Upsert categories
    const categoryDocs = [];
    for (const categoryName of categoriesToCreate) {
      let category = await Category.findOne({ name: categoryName });
      if (!category) {
        category = new Category({ name: categoryName });
        await category.save();
        console.log(`Created category: ${categoryName}`);
      } else {
        console.log(`Category exists: ${categoryName}`);
      }
      categoryDocs.push(category);
    }

    // Get all products
    const allProducts = await Product.find().sort({ createdAt: 1 });

    // Assign 4 products to each category
    let productIndex = 0;
    for (const category of categoryDocs) {
      for (let i = 0; i < 4; i++) {
        if (productIndex >= allProducts.length) break;
        const product = allProducts[productIndex];
        product.category = category._id;
        await product.save();
        console.log(`Assigned product "${product.name}" to category "${category.name}"`);
        productIndex++;
      }
    }

    console.log('Category and product updates completed.');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error updating categories and products:', error);
    mongoose.disconnect();
  }
}

updateCategoriesAndProducts();
