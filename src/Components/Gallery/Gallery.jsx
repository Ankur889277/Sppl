import React from 'react'
import './Gallery.css';
import ContactBar from "../ContactBar/ContactBar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Gallery = () => {
  return (
    <>
      <ContactBar />
      <Navbar />
      <div className="gallery-main-div">
        <span className='gallery-heading'>Gallery</span>
      </div>
      <Footer />
    </>
  )
}

export default Gallery
