import React from 'react';
import {CardMedia, Typography}  from '@mui/material';
import {Card} from '@mui/material';
import {CardContent} from '@mui/material';




const cardStyles = {
    maxWidth: 350,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: 'lightBlue'
};

export const EcomCard = (props) => { 
    const {name, email, phone, username} = props.prodDetails;
    const img_url = 'https://cdn.images.express.co.uk/img/dynamic/67/590x/secondary/Zinedine-Zidane-4773888.avif?r=1685088517329';
    return( 
    <Card sx= {cardStyles}>
       <CardMedia style={{ height: "150px" }} image={img_url} >
        </CardMedia>
        <CardContent>
          <Typography color="primary" variant="h5">
            {name}
         </Typography>
         <Typography color="textSecondary" variant="subtitle2">
            {email}
          </Typography>
          <Typography color="textSecondary" variant="subtitle2">
            {phone}
          </Typography> 
          <Typography color="primary" variant="h5">
            {username}
         </Typography> 
       </CardContent>
      </Card>
    );
}
