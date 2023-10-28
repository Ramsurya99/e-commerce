import React from 'react';
import {CardMedia, Typography}  from '@mui/material';
import {Card} from '@mui/material';
import {CardContent} from '@mui/material';
import { useState } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const cardStyles = {
    maxWidth: 350,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: 'lightBlue'
};

export const EcomCard = (product) => { 
    const {name, type} = product.prodDetails;
     
    return( 
    <Card sx= {cardStyles}>
       {/* <CardMedia style={{ height: "150px" }} image={image} >
        </CardMedia> */}
        <CardContent>
          <Typography color="primary" variant="h5">
            {name}
         </Typography>
         <Typography color="textSecondary" variant="subtitle2">
            {type}
          </Typography>
       </CardContent>
      </Card>
    );
}
