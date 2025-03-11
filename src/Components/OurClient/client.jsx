import React from "react";
import "./client.css";

const client = () => {
  return (
    <div className="client-main-container">
      <span className="client-heading">Our Clients</span>
      <div className="client-img-section">
        <img className="client-img img1" src="/image 1.svg"></img>
        <img className="client-img img2"src="/image 2.svg"></img>
        <img className="client-img img3" src="/image 3.svg"></img>
        <img className="client-img img4" src="/image 4.svg"></img>
        <img className="client-img img5" src="/image 5.svg"></img>
        <img className="client-img img6" src="/image 6.svg"></img>
      </div>
    </div>
  );
};

export default client;
