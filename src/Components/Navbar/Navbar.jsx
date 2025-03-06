import React from 'react'
import './Navbar.css'
import SpplLogo from "../../assets/svg/Sppl_Logo.png";

const Navbar = () => {
  return (
    <div className='main-nav'>
      <img className='nav-left-img' src={SpplLogo} alt="#" />
      <ul className='nav-right-ul'>
        <li className='nav-right-li'>Home</li>
        <li className='nav-right-li'>About</li>
        <li className='nav-right-li'>Gallery</li>
        <li className='nav-right-li'>Services</li>
        <li className='nav-right-li'>Blogs</li>
      </ul>
    </div>
  )
}

export default Navbar