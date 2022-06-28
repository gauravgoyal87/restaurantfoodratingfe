import React from "react";
import { Link } from "react-router-dom";

const RestaurantList = (props) => {
  

    let restaurants = props.restaurants.map(item => {
        return (
            <Link key={item._id} to={`/${item.name}`}>
                <h4>{item.name}</h4>
                <p>{item.location}</p>
            </Link>
        )
    })

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
