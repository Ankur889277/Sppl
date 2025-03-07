import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import SpplLogo from "../../assets/svg/Sppl_Logo.png";

const Navbar = () => {
  return (
    <div className='main-nav'>
      <img className='nav-left-img' src={SpplLogo} alt="#" />
      <ul className='nav-right-ul'>
        <li className='nav-right-li'><Link to="/">Home</Link></li>
        <li className='nav-right-li'><Link to="/about">About</Link></li>
        <li className='nav-right-li'><Link to="/gallery">Gallery</Link></li>
        <li className='nav-right-li'><Link to="/services">Services</Link></li>
        <li className='nav-right-li'><Link to="/blogs">Blogs</Link></li>
      </ul>
    </div>
  )
}

export default Navbar