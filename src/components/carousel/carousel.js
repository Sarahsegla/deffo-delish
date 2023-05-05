import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from "../item/item";
import Data from "../../Data.json";


function ImageCarousel()
{
    
    return (
        <Carousel>
            {
                Data.map( item => <Item key={item.Id} item={item} /> )
            }
        </Carousel>
    )
}

export default ImageCarousel;