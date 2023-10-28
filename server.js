const express = require('express')
const bodyParser = require('body-parser') 
const app = express();
const PORT = 3001;
const cors = require('cors')
// const Razorpay = require('razorpay')
// const Product = require('./models')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// const razorpay = new Razorpay({
//     key_id: 'rzp_test_p9Z1l24HVwkW18',
//     key_secret: 'L8vItJ31VuYJWmfSXD7m9Ils',
//   });

const Product = [{
  id: 1,
  name: "Phone",
  type: "Electronic",
  price: 50000
},
{
  id: 2,
  name: "laptop",
  type: "Electronic",
  price: 75000
},
{
  id: 3,
  name: "charger",
  type: "Electronic",
  price: 2500
},
{
  id: 4,
  name: "Tablet",
  type: "Electronic",
  price: 25000
},{
  id: 5,
  name: "earphones",
  type: "Electronic",
  price: 2500
},{
  id: 6,
  name: "socket",
  type: "Electronic",
  price: 1000
}]


app.get('/products',  async (req, res) => {
    const {query} = req.query
    const matchedProduct = Product.find((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
    );
    if (matchedProduct) {
      res.send(matchedProduct.name);
      console.log(matchedProduct.name);
    } else {
      res.status(404).send('Item not found');
      console.log("item not found");
    }
});


app.post('/orders', async (req, res) => {
    try {
      const options = {
        amount: req.body.amount * 100, 
        currency: 'INR',
        receipt: 'order_receipt', 
        payment_capture: 1,
      };
  
      const order = await razorpay.orders.create(options);
      const checkoutUrl = order.short_url;
      res.json({ orderId: order.id, checkoutUrl });
    } catch (error) {
      console.error('Error creating Razorpay order:', error);
      res.status(500).json({ error: 'Failed to create order' });
    }
  });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });