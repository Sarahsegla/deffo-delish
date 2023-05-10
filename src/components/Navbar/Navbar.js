import React from "react";
import "./styles.css";
import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';
// import AddIcon from '@mui/icons-material/Add';
import InstagramIcon from '@mui/icons-material/Instagram';
// import SearchIcon from '@mui/icons-material/Search';
import { Link} from 'react-router-dom';

function Navbar () {
    return (
        <div>
            <nav className="navbar" style={{justifyContent: 'flex-end', background: 'transparent'}} >
                <ul className="page" style={{display: 'flex', justifyContent: 'space-around'}} >
                <CustomLink to="/home"  > <Button className="home" variant="text" style={{  color: 'black', fontFamily: 'Bebas Neue', textDecoration: 'underline orange' }}>Home</Button></CustomLink>
                <CustomLink to="/Restaurant"><Button variant="text" style={{ textDecoration: 'none', color: 'black', fontFamily: 'Bebas Neue' }}>Restaurants</Button></CustomLink>
                <CustomLink to="/Contact"><Button variant="text" style={{ textDecoration: 'none', color: 'black', fontFamily: 'Bebas Neue', paddingRight: '10px' }}>Contact</Button></CustomLink>
                <a href={"mailto:ablavisarahsegla@gmail.com"}><MailIcon  style={{ textDecoration: 'none', color: 'black'}}/></a>
                {/* <AddIcon/> */}
                <a href="https://www.instagram.com/deffodelish/?igshid=YmMyMTA2M2Y%3D"><InstagramIcon style={{ color: 'red' }}/></a>
                {/* <SearchIcon/> */}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;

function CustomLink({ to, children, ...props }) {
    const path = window.location.pathname
    // const myStyle = {
    //     display: 'inline'
    // }

    return (
        <div>
       <li style={{display: 'inline'}} className={path === to  ? "active" : ""}>
       <Link to={to} {...props}>
        {children}
       </Link>
       </li>
       </div>
    )
} 