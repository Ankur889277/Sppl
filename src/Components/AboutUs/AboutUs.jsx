import React from "react";
import "./AboutUs.css";
import ContactBar from "../ContactBar/ContactBar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MineImage from "../../assets/svg/Mine_Image_1.png";
import AboutStatsContainer from "../AboutStatsContainer/AboutStatsContainer";

const AboutUs = () => {
  return (
    <>
      <ContactBar />
      <Navbar />
      <div className="about-main-div">
        <div className="about-circle1" />
        <div className="about-bg-circle" />
        <div className="about-text">
          <span className="about-heading">About Us</span>
          <div className="profile">
            <img className="about-profile-image" src={MineImage} alt="#" />
            <div className="about-profile-text">
              <span className="about-profile-heading">Company Profile</span>
              <span className="about-profile-detail-text">
                SPPL is a multidisciplinary team of professionals with an
                in-depth understanding of the latest trends, combining
                creativity with initiatives to provide result-oriented solution.
              </span>
              <span className="about-profile-detail-text">
                We are committed to offering engineering services of the highest
                quality to ensure state-of-the-art technology, economy in
                project and product costs, timely completion of assignments,
                environment-friendliness and customer satisfaction.
              </span>
              <span className="about-profile-detail-text">
                Serving the industry since decades with a plethora of happy
                customers. We have built a strong reputation in the field
                through our quality of work and up to the mark commitments.
              </span>
              <span className="about-profile-detail-text">
                We provide one stop solution through our NABET accredited
                consultancy services, NABL accredited chemical testing
                laboratory services and high precision industry leading survey
                services for almost all kind of engineering projects.
              </span>
            </div>
          </div>
        </div>
        <div className="about-stats">
          <AboutStatsContainer />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
