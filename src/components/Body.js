import React, { useEffect } from 'react';
import { useState} from 'react';
import { EcomCard } from './EcomCard';
import {products} from '../dumps/MetaData';
import {Container, Grid} from '@mui/material';
import { Cart } from './Cart';
import {ProductDetails} from './ProductDetails';
import { PopUp } from './PopUp';
import { Router, Routes, Route, Link, Switch } from 'react-router-dom';
import {Button, NavBar} from '@mui/material';
import axios from 'axios';


function filterData(searchText, products){
    return products.filter(restaurant => restaurant.name.toLowerCase().includes(searchText))
  }


export const Body = () => {
    const [searchText, setSearchText] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [popUpOpen, setPopUpOpen] = useState(false);

    
    const handleSearch = async () => {
      console.log("Button is pressed");
      try {
        const response = await axios.get(`http://localhost:3001/products?query=${searchQuery}`);
        setSearchResults(response.data);
        console.log(searchResults);
      } catch (error) {
        console.error('Error searching item:', error);
        setSearchResults('Item not found');
        console.log(searchResults);
      }
    };
  

    const handlePayment = async () => {
      try {
          const orderUrl = `http://localhost:3001/orders`;
          const prices = cartItems.map((item) => (item.price !== undefined ? item.price : null))
          const totalPrice = prices.reduce((total, price) => total + price, 0);
          console.log(prices);
          console.log(totalPrice);
          console.log(cartItems);
          const {data} = await axios.post(orderUrl, {amount: totalPrice});
          console.log(data);
  
          const razorpayOptions = {
            key: 'rzp_test_p9Z1l24HVwkW18', 
            amount: 1000,
            currency: 'INR',
            name: 'Test',
            order_id: data.orderId,
            handler: (response) => {
              console.log('Payment success:', response);
          },
        };
          const razorpayInstance = new window.Razorpay(razorpayOptions);
          razorpayInstance.open();
      }catch (error) {
          console.error('Payment error:', error);
      }
    };
    
    const addToCart = (product) => {
      const existingItem = cartItems.find((item) => item.id === product.id);
  
      if (existingItem) {
        const updatedCartItems = cartItems.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setCartItems(updatedCartItems);
      } else {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
      }
    };

    const handlePopUpOpen = () => {
      setPopUpOpen(true);
    }
  
    const handlePopUpClose = () => {
      setPopUpOpen(false);
    }
  
    
    useEffect(() => {
      console.log("Updated cartItems:", cartItems);
    }, [cartItems]);
    

  //   useEffect(() => {
  //     fetchUserData()
  //   }, [cartItems]);


  // async function fetchUserData() {
  //     const response = await fetch('https://fakestoreapi.com/products');
  //     const data = await response.json();
  //     setAllProducts(data)
  //     setFilteredProducts(data)
  //   }

    
    // async function getProducts() {
    //   const data = products;
    //   setAllProducts(data);
    //   setFilteredProducts(data);
    // }
    
    
    return(
      <Container sx={{ marginTop: 3, marginBottom: 3 }}>
            <Container sx={{ marginTop: 2, marginBottom: 2 }}>
              <input  
                  type='text'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder='search'
                  className='search'
              />
              <button onClick={handleSearch}
                // const data = filterData(searchQuery.toLowerCase(),products);
                // setFilteredProducts(data);
              >Search</button> 
            </Container>
            <Container sx={{ marginTop: 2, marginBottom: 2 }}>
            <Button variant="contained" onClick={handlePayment}>Proceed to Pay</Button>
            {/* <Routes>
            <Route
              path="/cart"
              element = { <Cart cartItems={cartItems} />}
            />
            <Route
              path="/product-details/:productId"
              element = { <ProductDetails addToCart={addToCart} /> }
            />  
            </Routes> */}
            </Container>
            <Grid container spacing={2}>
                {
                  products.map((product) => { 
                  return(
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <EcomCard  prodDetails = {product} />
                    <button onClick= {() => {addToCart({product})
                    }}>Add to cart </button>
                    <button onClick={handlePopUpOpen}>View Details</button>
                    {popUpOpen && (
                      <PopUp product={product} onClose={handlePopUpClose} />
                    )}
                    </Grid>
                  )
                })}
            </Grid>
        </Container>
    );
  }

    // setup two more states such as all products and filtered products.
    // change filtered products as mapper and all products for onclick
    // async api call and set both of the above with data
    //set up router and link commands
    // add outlet to child element
