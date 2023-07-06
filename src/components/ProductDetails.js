import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
export const ProductDetails = ({product}) => {
    return(
        <Box sx={{ marginTop: '2rem' }}>
          <Typography variant="h4">Product Details </Typography>  
          <Card sx={{ marginTop: '1rem' }}>
            <CardContent>
                <Typography variant="h5">{product.name}</Typography>  
                <Typography variant="h5">{product.email}</Typography>  
                <Typography variant="h5">{product.phone}</Typography>  
            </CardContent>
          </Card>
        </Box>
    )
}