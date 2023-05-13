import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ height: '70vh' }}>
        <h1 className="name" style={{  fontFamily: 'Bebas Neue',  paddingBottom: '10px', textAlign: 'left' }}><span id="we">D</span>effo<span id="we">D</span>elish</h1>
        </Box> 
        
      </Container>
    </React.Fragment>
  );
}