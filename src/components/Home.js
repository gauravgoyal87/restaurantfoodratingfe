import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-great-grandparent">
      <div className="home-uncle">
        <img src="imgs/Spoon.png" alt="" />
        <img className="home-grease" src="imgs/Grease.png" alt="" />
      </div>
      <div className="home-parent">
        <p className="home-p1" >
          "UH... WHAT WAS THAT
          <span> THING WE ATE </span>
          THAT ONE TIME?"
        </p>
        <p>
          ... YOU MIGHT WANNA <span className="home-write" >WRITE</span> THAT SOMEWHERE
        </p>
        <Link to="/restaurants">
          <button className="home-button" >WRITE IT DOWN</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
