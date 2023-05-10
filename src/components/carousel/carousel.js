import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from "../item/item";
import Data from "../../Data.json";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function ImageCarousel()
{
    
    return (
        <>
        <Container maxWidth="sm">
        <Box sx={{ height: '50vh' }}>
        <Carousel>
            {
                Data.map( item => <Item key={item.Id} item={item} /> )
            }
        </Carousel>
        </Box> 
        
      </Container>
        </>
    )
}

export default ImageCarousel;