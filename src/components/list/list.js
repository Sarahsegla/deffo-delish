import React from "react";
import DataList from '../../DataList.json';
import { Button } from "@mui/material";


function List () {
    return (
        <div className='Project'>
            <h1 className='title' style={{paddingBottom: '20px', fontFamily: 'Bebas Neue'}}>Restaurants</h1>
        

        <div className='inside' style={{paddingBottom: '90px'}}>
{
    DataList && DataList.map( Project => {
        return(
            <div className='box' key={ Project.id } style={{justifyContent: 'space-between'}}>
                <h2 variant="outlined" color="error">{ Project.location }</h2>
                <img src={Project.ShopImage } style={{width: '200px', height: '200px'}} alt='shop' />
               <Button  variant="outlined" color="error" style={{  marginRight: '80px'}}><a href={ Project.url} style={{textDecoration: 'none'}} >{ Project.name }</a> </Button>
               
                </div>
        )
    })
}
        </div>
        </div>
    )
}

export default List;