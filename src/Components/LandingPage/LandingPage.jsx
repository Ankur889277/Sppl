import React from 'react'
import ContactBar from "../ContactBar/ContactBar";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Xyz from '../OurClient/client'
import MiddlesectionCOO from "../MiddlesectionCOO";
import Services from "../Services";
import Team from "../Team"
const LandingPage = () => {
  return (
    <>
      <ContactBar />
      <Navbar />
      <Home />
      <Xyz/>
      <MiddlesectionCOO/>
      <Services/>
      <Team/>
    </>
  )
}

export default LandingPage
