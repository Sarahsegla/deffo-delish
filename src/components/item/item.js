import React from "react";
import { Paper, Button } from '@mui/material';
import "./styles.css";

function Item(props)
{
    return (
        <Paper>
            <div className="mySlides" style={{textAlign: 'center'}}>
            <img src={props.item.image} alt={props.item.description} style={{width: '600px', height: '500px'}}/>
            <h1>{props.item.description}</h1>
            </div>

            <Button className="CheckButton">
                {/* Check it out! */}
            </Button>
        </Paper>
    )
}

export default Item;