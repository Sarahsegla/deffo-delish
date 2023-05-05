import React from "react";
import { Paper, Button } from '@mui/material';

function Item(props)
{
    return (
        <Paper>
            <img src={props.item.image} alt={props.item.description} />
            <h1>{props.item.description}</h1>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default Item;