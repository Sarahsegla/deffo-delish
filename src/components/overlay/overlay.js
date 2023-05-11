import React from 'react' ;
import Data from '../../Data.json';
import "./styles.css";
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Awaaba from '../../image/awaaba.gif';
import Awaaba2 from '../../image/awaaba2.jpeg';
import Crept from '../../image/crept.gif';
import Crept2 from '../../image/crept2.jpeg';





function Overlay(props) {
    return (
        <div className='Project' style={{padding: '40px', paddingTop: '100px'}}>
            <div className='inside'>
{
    Data && Data.map( Project => {
        return(
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} style={{paddingLeft: '50px'}}>
        <Grid  xs>
            <div className='box' key={ Project.id }>
                <img src={Project.image } alt='project' className='Image' style={{width: '200px', height: '200px', zIndex: '2', position: 'absolute', marginLeft: '100px', marginTop: '100px'}}/>
                <img src={Project.ShopImage } alt='project' className='shopImage' style={{width: '200px', height: '200px', zIndex: '1', position: 'absolute'}} />
               </div>
               </Grid>
               <Grid  xs>
               <img src={Awaaba } alt='Rice' className='Image' style={{width: '200px', height: '200px', zIndex: '2', position: 'absolute', marginLeft: '100px', marginTop: '100px'}}/>
                <img src={Awaaba2} alt='shop of rice' className='shopImage' style={{width: '200px', height: '200px', zIndex: '1', position: 'absolute'}} />
        </Grid>
        <Grid xs>
        <img src={Crept } alt='Crept' className='Image' style={{width: '200px', height: '200px', zIndex: '2', position: 'absolute', marginLeft: '100px', marginTop: '100px'}}/>
        <img src={Crept2} alt='Shop of crept' className='shopImage' style={{width: '200px', height: '200px', zIndex: '1', position: 'absolute'}} />
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