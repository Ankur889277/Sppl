import React from "react";
import "./Footer.css";
import { FaArrowUpLong } from "react-icons/fa6";


const Footer = () => {
  const handlleScrollUpClick = ()=> {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer-main">
      <div className="footer-details">

        <div className="footer-about-us">
          <span className="footer-heading">About Us</span>
          <span className="footer-red-line"></span>
          <span className="footer-about-us-span">SPPL is a multidisciplinary team of professionals with an in-depth understanding of the latest trends, combining creativity with initiatives to provide result-oriented solution.</span>
        </div>

        <div className="footer-head-office">
          <span className="footer-heading">Head Office</span>
          <span className="footer-red-line"></span>
          <div className="head-office-address">
            <span className="footer-Sub-heading">Head Office</span>
            <span className="footer-head-office-span">Head Office 6th Floor, Shreya Enclave, Harmu Road, Garikhana Chowk, Opposite Shakti Petrol Pump, Ranchi – 834001, Jharkhand</span>
          </div>
          <span className="footer-Sub-heading footer-head-office-phone">Phone: <span style={{fontWeight: "400", marginLeft: "10px", color:"rgb(225, 225, 225)"}}>+91 7604035778</span></span>
          <span className="footer-Sub-heading footer-head-office-mail">E-mail: <span style={{fontWeight: "400", marginLeft: "10px", color:"rgb(225, 225, 225)"}}>info@sathiplanners.com</span></span>
        </div>

        <div className="footer-branch-office">
          <span className="footer-heading">Branch Office</span>
          <span className="footer-red-line"></span>
          <div className="head-office-address">
            <span className="footer-Sub-heading">Branch Office</span>
            <span className="footer-head-office-span">Manoj Talkes Basement Kumarpur, Asansol - 713304, West Bengal</span>
          </div>
          <span className="footer-Sub-heading footer-head-office-phone">Phone: <span style={{fontWeight: "400", marginLeft: "10px", color:"rgb(225, 225, 225)"}}>+91 8617345991</span></span>
          <span className="footer-Sub-heading footer-head-office-mail">E-mail: <span style={{fontWeight: "400", marginLeft: "10px", color:"rgb(225, 225, 225)"}}>info@sathiplanners.com</span></span>
        </div>

      </div>
      <button className="footer-scroll-up-btn" onClick={handlleScrollUpClick}><FaArrowUpLong style={{color:"white", fontSize:"22px"}}/></button>
      <div className="footer-copyright">
        <div className="copyright-marks"style={{marginLeft: "4.5%"}}>
            <span style={{fontSize: "clamp(8px, 1vw, 14px)"}}>Copyright © Sathi Planners Pvt. Ltd.</span>
            <span style={{fontSize: "clamp(8px, 1vw, 14px)"}}>SPPL is a Sathi Planners Trademark</span>
        </div>
        <div className="footer-faq">
          <span>HISTORY</span>
          <span>FAQs</span>
          <span>EVENTS</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;