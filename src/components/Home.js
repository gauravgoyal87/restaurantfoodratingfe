import React from "react";

const Home = () => {
  return (
    <div className="home-great-grandparent">
      <div className="home-uncle">
        <img src="imgs/Spoon.png" alt="" />
        <img className="home-grease" src="imgs/Grease.png" alt="" />
      </div>
        <div className="home-parent">
          <p>
            "UH... WHAT WAS THAT
            <span> THING WE ATE </span>
            THAT ONE TIME?"
          </p>
          <p>
            ... YOU MIGHT WANNA <span>WRITE</span> THAT SOMEWHERE
          </p>

          <button>WRITE IT DOWN</button>
        </div>
    </div>
  );
};

export default Home;
