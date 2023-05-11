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
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
//import Rating from '@mui/material/Rating';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


function Overlay(props) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [value, setValue] = React.useState(2);

    return (
        <div className='Project' style={{padding: '40px', paddingTop: '100px', justifyContent: 'space-between' }}>
            <div className='inside'>
{
    Data && Data.map( Project => {
        return(
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} style={{paddingLeft: '100px', justifyContent: 'space-between' }}>
        <Grid  xs>
            <div className='box' key={ Project.id }>
            <img src={Project.image } alt='project' className='Image' style={{width: '200px', height: '200px', zIndex: '2', position: 'absolute', marginLeft: '40px', marginTop: '40px'}}/> 
            <Button onClick={handleOpen}>     <img src={Project.ShopImage } alt='project' className='shopImage' style={{width: '200px', height: '200px', zIndex: '1', position: 'absolute'}} /> </Button>

                <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Mamma Mia 
            
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            hellllllllllllllooo
          </Typography>
        </Box>
      </Modal>

               </div>
               </Grid>
               <Grid  xs>
               <img src={Awaaba } alt='Rice' className='Image' style={{width: '200px', height: '200px', zIndex: '2', position: 'absolute', marginLeft: '40px', marginTop: '40px'}}/> 
            <Button onClick={handleOpen}>     <img src={Awaaba2} alt='shop of rice' className='shopImage' style={{width: '200px', height: '200px', zIndex: '1', position: 'absolute'}} /> </Button>

                <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

        </Grid>
        <Grid xs>
        <img src={Crept } alt='Crept' className='Image' style={{width: '200px', height: '200px', zIndex: '2', position: 'absolute', marginLeft: '40px', marginTop: '40px'}}/>
        <Button onClick={handleOpen}>   <img src={Crept2} alt='Shop of crept' className='shopImage' style={{width: '200px', height: '200px', zIndex: '1', position: 'absolute'}} /></Button>

                <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

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