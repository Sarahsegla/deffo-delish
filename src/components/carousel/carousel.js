import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from "../item/item";
import Data from "../../Data.json";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';


function ImageCarousel()
{
    
    return (
        <>
        <React.Fragment>
      <CssBaseline />
        <Container maxWidth="sm">
        <Box sx={{ height: '50vh' }}>
        <Carousel>
            {
                Data.map( item => <Item key={item.Id} item={item} /> )
            }
        </Carousel>
        </Box> 
        
      </Container>
      </React.Fragment>
        </>
    )
}

export default ImageCarousel;