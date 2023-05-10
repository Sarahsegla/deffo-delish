import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Gif1 from '../../image/spag1.gif';
import Gif2 from '../../image/options.gif';
import Gif3 from '../../image/shop.gif';

export default function SimpleContainer() {
  return (
    <>
        <h3 style={{textAlign: 'left', paddingTop: '100px', paddingBottom: '100px', paddingLeft: '50px', fontSize: '30px'}}>Any Suggestion of Restaurants?</h3>
        
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs>
            <img src={Gif1} alt='giggy'/>
          </Grid>
          <Grid item xs>
          <img src={Gif2} alt='option of food'/>
          </Grid>
          <Grid item xs>
          <img src={Gif3} alt='shops' style={{width: '300px', height: '250px'}}/>
          </Grid>
        </Grid>
      </Box>
      </>
        
  );
}