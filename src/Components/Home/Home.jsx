import React from "react";
import "./Home.css";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import HomeText from "../HomeTexts/HomeTexts";

const imageArray = [
  "https://images.pexels.com/photos/2101135/pexels-photo-2101135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/461789/pexels-photo-461789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/33192/paddle-wheel-bucket-wheel-excavators-brown-coal-open-pit-mining.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/14747539/pexels-photo-14747539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const Home = () => {
  return (
    <div className="home-main-div">
      <div className="home-bg-circle" />
      <HomeCarousel images={imageArray} />
      <HomeText />
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  );
};

export default Home;
