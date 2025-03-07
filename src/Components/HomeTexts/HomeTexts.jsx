import React from "react";
import "./HomeTexts.css";

const HomeTexts = () => {

    const handleEnquireClick = ()=> {
        window.alert("clicked");
    }
  return (
    <div className="home-info">
      <div className="home-heading-text">
        <span>Revolutionizing Surveys</span>
        <span>and Exploration with</span>
        <span>Cutting-Edge Technology</span>
      </div>
      <div className="home-info-text">
        <span>QCI NABET Accredited Environmental Consultants</span>
        <span>NABL Accredited Environmental Lab</span>
        <span>ISO 9001:2015 certified Organization</span>
      </div>
      <button className="home-btn" onClick={handleEnquireClick}>Enquire Now</button>
    </div>
  );
};

export default HomeTexts;