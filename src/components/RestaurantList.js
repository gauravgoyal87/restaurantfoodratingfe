import React from "react";
import { Link } from "react-router-dom";

const RestaurantList = (props) => {
  let restaurants = props.restaurants.map((item, index) => {
    return (
      <Link key={index} to={`/${index}`}>
        <h4>{item.restaurantName}</h4>
        <p>{item.location}</p>
      </Link>
    );
  });

  return (
    <div className="rl-parent">
      <div className="rl-title">
        <p>My Restaurants</p>
      </div>

      {restaurants}

      <div className="rl-add-button-div">
        <p>ADD A RESTAURANT</p>
        <Link to="/restaurants/add">
          <button className="rl-add-button" >+</button>
        </Link>
      </div>
    </div>
  );
};

export default RestaurantList;
