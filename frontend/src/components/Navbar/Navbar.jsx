import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import {AiOutlinePlus} from '@react-icons/all-files/ai/AiOutlinePlus'
import './Navbar.css'
import { Button } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import MenuBar from './MenuBar';
function Navbar() {

    const { isAuthenticated } = useSelector((state) => state.user);

    return (
        <div className='navMain'>

           <div className="nav">
         
            <div className="home"><Link className='link' to="/" style={{ textDecoration: 'none' }} >Home</Link></div>
            <div className="about-us"><Link className='link' to="/about" style={{ textDecoration: 'none' }} >About Us</Link></div>
 

            

           
           </div>
           {isAuthenticated?<MenuBar className='menuBar'/>: <div className="login"><Link className='link' to="/login" style={{ textDecoration: 'none' }}>Login</Link></div>}
           {isAuthenticated?<Link className='link' to="/newTransaction" style={{ textDecoration: 'none',color:"white" }} ><Button startIcon={<AddIcon/>} variant='contained' sx={{marginTop:"1.8rem",marginLeft:"1rem",backgroundColor:"#35dea0"}}>Add Transaction</Button></Link>:null}
        </div>
    )
}

export default Navbar
