import React from 'react'
import ContactBar from "../ContactBar/ContactBar";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import OurClients from '../OurClient/client'
import MiddlesectionCOO from "../MiddlesectionCOO";
import Services from "../Services";
import Team from "../Team"
import Footer from '../Footer/Footer';
import TestiMonials from '../Testimonials/TestiMonials';
const LandingPage = () => {
  return (
    <>
      <ContactBar />
      <Navbar />
      <Home />
      {/* <OurClients/>
      <MiddlesectionCOO/>
      <Services/>
      <Team/> */}
      <TestiMonials />
      <Footer/>
    </>
  )
}

export default LandingPage;
