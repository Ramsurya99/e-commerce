import React, { useEffect } from 'react';
import { useState} from 'react';
import { EcomCard } from './EcomCard';
//import {products} from '../dumps/MetaData';
import { PopUp } from './PopUp';
import {Container, Grid} from '@mui/material';


function filterData(searchText, products){
    return products.filter(restaurant => restaurant.name.toLowerCase().includes(searchText))
  }

export const Body = () => {
    const [searchText, setSearchText] = useState('');
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [popUpOpen, setPopUpOpen] = useState(false);

    useEffect(() => {
      fetchUserData()
    }, []);
  
  const handlePopUpOpen = () => {
    setPopUpOpen(true);
  }

  const handlePopUpClose = () => {
    setPopUpOpen(false);
  }

  async function fetchUserData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setAllProducts(data)
      setFilteredProducts(data)
    }

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
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder='search'
                  className='search'
                  value={searchText}
              />
              <button onClick={() => {
                const data = filterData(searchText.toLowerCase(),allProducts);
                setFilteredProducts(data);
              }}>Search</button> 
            </Container>
            <Grid container spacing={2}>
                {
                  filteredProducts.map((product) => { 
                  return(
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <EcomCard key = {product.id} prodDetails = {product} />
                    <button onClick={() => {
                      setCartItems([...cartItems, product])
                      console.log(`added to cart ${product.name}`,cartItems)
                    }}> Add to cart </button>
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