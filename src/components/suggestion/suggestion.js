import * as React from 'react';
import { useEffect } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import Gif1 from '../../image/spag1.gif';
import Gif2 from '../../image/options.gif';
// import Gif3 from '../../image/shop.gif';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Email from '../email/email';
import './styles.css';


export default function SimpleContainer() {
  useEffect(()=> {
    AOS.init({duration: 2000})
}, [])
  return (
    <>
        <h3 data-aos="fade-up-right" style={{textAlign: 'left', paddingTop: '100px', paddingBottom: '100px', paddingLeft: '50px', fontSize: '30px'}}>
          Any Suggestion of Restaurants?</h3>
        
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/* <Grid item xs>
            <img src={Gif1} alt='spaghetti' style={{width: '350px', height: '250px'}}/>
          </Grid> */}
          <Grid item xs style={{paddingLeft: '50px'}} className='gif'>
          <img src={Gif2} className='gifImage' alt='option of food'style={{width: '350px', height: '400px'}}/>
          </Grid>
          <Grid item xs>
          {/* <img src={Gif3} alt='shops' style={{width: '350px', height: '250px'}}/> */}
          <Email />
          </Grid>
        </Grid>
      </Box>
      </>
        
  );
}