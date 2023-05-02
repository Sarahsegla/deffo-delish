import React from "react";
import "./styles.css";
import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';
import AddIcon from '@mui/icons-material/Add';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';

function Navbar () {
    return (
        <div>
            <div className="navbar">
                <div className="page">
                <Button className="home" variant="text" style={{ textDecoration: 'none', color: 'black', backgroundColor: 'gray', fontFamily: 'Bebas Neue' }}>Home</Button>
                <Button variant="text" style={{ textDecoration: 'none', color: 'black', fontFamily: 'Bebas Neue' }}>Restaurants</Button>
                <Button variant="text" style={{ textDecoration: 'none', color: 'black', fontFamily: 'Bebas Neue', paddingRight: '10px' }}>Contact</Button>
                <MailIcon/>
                <AddIcon/>
                <InstagramIcon style={{ color: 'red' }}/>
                <SearchIcon/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;