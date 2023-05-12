import React from "react";
import "./styles.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Button } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';



function Footer() {
    return (
        <>
 
        <footer >
        <Box sx={{ flexGrow: 1 }} style={{backgroundColor: '#5072A7'}}>
      <Grid container spacing={2}>
        <Grid xs={12} md={5} lg={4}>
        <h1 className="name" style={{  fontFamily: 'Bebas Neue',  paddingBottom: '10px', textAlign: 'left' }}>DeffoDelish</h1>
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={6} lg={3}>
            
              <Box
                id="category-a"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
               <Button variant="text" style={{ textDecoration: 'none', color: 'black', fontFamily: 'Bebas Neue', paddingRight: '10px' }}>What's More?</Button>
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
              <li><a href="#rest"> Restaurants</a></li>
                <br></br>
                <li><a href="#blog"> Blogs</a></li>
                <br></br>
                <li><a href="#food"> Food</a></li>
              </Box>
            
          </Grid>
          <Grid xs={6} lg={3}>
           
              <Box
                id="category-b"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                <Button variant="text" style={{ textDecoration: 'none', color: 'black', fontFamily: 'Bebas Neue', paddingRight: '10px' }}>About</Button>
              </Box>
              <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                <li><a href="#rest"> Restaurants</a></li>
                <br></br>
                <li><a href="#blog"> Blogs</a></li>
                <br></br>
                <li><a href="#food"> Food</a></li>
              </Box>
            
          </Grid>
          <Grid xs={6} lg={3}>
            
              <Box
                id="category-c"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                <Button variant="text" style={{ textDecoration: 'none', color: 'black', fontFamily: 'Bebas Neue', paddingRight: '10px' }}>Contact Us</Button>
              </Box>
              <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2 }}>
                <li>1234 Fake Address Ave. 
                    <br></br>
                    Monroeville, PA 1234
                    </li>
                    <br></br>
                    <li>P: 123 456 789</li>
                    <br></br>
                <li> <a href="#help">Help</a></li>
                <br></br>
                <li><a href="faq">FAQs</a></li>
                <br></br>
                
              </Box>
            
          </Grid>
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px' }}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            © Copyright | Privacy Policy
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
            <a href={"mailto:ablavisarahsegla@gmail.com"}><MailIcon  style={{ textDecoration: 'none', color: 'black'}}/></a>
            </Grid>
            <Grid>
            <a href="https://www.instagram.com/deffodelish/?igshid=YmMyMTA2M2Y%3D"><InstagramIcon style={{ color: 'red' }}/></a>
            </Grid>
            <Grid>
            <a href="https://github.com/Sarahsegla"><GitHubIcon  style={{ textDecoration: 'none', color: 'black'}}/></a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
        </footer>
     
        </>
    )
}

export default Footer;