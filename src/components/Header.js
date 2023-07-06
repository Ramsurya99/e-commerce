import React from 'react';
import { Link } from 'react-router-dom';
import { Container }  from '@mui/material';
import { Typography } from '@mui/material';

export const Header = () => {
    return (
        <div className = "header">
            <Container>
                <Typography color="textPrimary" gutterBottom variant="h2" align="center">
                    Ecommerce Web App
                </Typography>
                <div className="logo">
                <Container>

                </Container>
                </div>
                <div className="nav-items">
                    <Container>
                    <ul>
                        <Link to="/"> Home </Link> 
                        <Link to="/about"> About </Link> 
                        <Link to="/contact"> Contact Us </Link> 
                    </ul>
                    </Container>
                </div>
            </Container>          
        </div>
    );
}

