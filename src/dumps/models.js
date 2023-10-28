const mongoose = require('mongoose');
const axios = require('axios');
mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ProductSchema = new mongoose.Schema({
  id: Number,
  name: String,
  username: String,
  email: String,
  address: Object,
  phone: String,
  website: String,
  company: Object
});

const Product = mongoose.model('Product', ProductSchema);

const fetchProductsFromApi = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

const storeProductsInDatabase = async () => {
    const products = await fetchProductsFromApi();
    try {
      await Product.insertMany(products);
      console.log('Products stored in the database');
    } catch (error) {
    console.error('Error storing products:', error);
  }
};

storeProductsInDatabase();
module.exports = Product;