import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



function Footer() {
    return (
        <>
 <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" style={{paddingTop: '100px', backgroundColor: '#5072A7'}}>
        <Box sx={{ bgcolor: '#5072A7', height: '30vh', width: '10vh' }} />
        <p>
            2023
        </p>
      </Container>
    </React.Fragment>
        </>
    )
}

export default Footer;