import React from 'react' ;
import Data from '../../Data.json';
import "./styles.css";
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Awaaba from '../../../public/images/awaaba.gif';
import Awaaba2 from '../../../public/images/awaaba2.jpeg';




function Overlay(props) {
    return (
        <div className='Project'>
            <h1 className='title'>....</h1>
        

        <div className='inside'>
{
    Data && Data.map( Project => {
        return(
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
            <div className='box' key={ Project.id }>
                <img src={Project.image } alt='project' className='Image' style={{width: '200px', height: '200px', zIndex: '2', position: 'absolute', marginLeft: '100px', marginTop: '100px'}}/>
                <img src={Project.ShopImage } alt='project' className='shopImage' style={{width: '200px', height: '200px', zIndex: '1', position: 'absolute'}} />
               </div>
               </Grid>
               <Grid item xs>
               <img src={Awaaba } alt='project' className='Image' style={{width: '200px', height: '200px', zIndex: '2', position: 'absolute', marginLeft: '100px', marginTop: '100px'}}/>
                <img src={Awaaba2} alt='project' className='shopImage' style={{width: '200px', height: '200px', zIndex: '1', position: 'absolute'}} />
        </Grid>
        <Grid item xs>
          hi
        </Grid>
      </Grid>
    </Box>
        )
    })
}
        </div>
        </div>
    )
}

export default Overlay;