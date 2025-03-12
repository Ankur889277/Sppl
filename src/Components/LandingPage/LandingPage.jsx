import React from 'react'
import '../../App.css';
import ContactBar from "../ContactBar/ContactBar";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import OurClients from '../OurClient/client';
import MiddlesectionCOO from "../MiddlesectionCOO";
import Services from "../Services";
import Team from "../Team";
import Footer from '../Footer/Footer';
import TestiMonials from '../Testimonials/TestiMonials';
import BlogsPosts from '../BlogsPosts/BlogsPosts';
const LandingPage = () => {
  return (
    <>
      <ContactBar />
      <Navbar />
      <Home />
      <OurClients/>
      <span className='divider-line'></span>
      <MiddlesectionCOO/>
      <Services/>
      <Team/>
      <BlogsPosts />
      <TestiMonials />
      <Footer/>
    </>
  )
}

export default LandingPage;
