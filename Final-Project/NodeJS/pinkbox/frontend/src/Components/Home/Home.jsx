import React from "react";
import "./Home.css";
import home_image from "../Assets/family.png";
import arrow_icon from "../Assets/arrow.png";

console.log("Home.jsx");

const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <p>new</p>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        {/*
        <div className="home-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
        */}
      </div>
      <div className="home-right">
        <img src={home_image} alt="home" />
      </div>
    </div>
  );
};

export default Home;

