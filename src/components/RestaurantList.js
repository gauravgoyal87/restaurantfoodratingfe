import React from "react";
import { Link } from "react-router-dom";

const RestaurantList = (props) => {
  let restaurants = props.restaurants.map((item) => {
    return (
      <Link key={item._id} to={`/${item.name}`}>
        <h4>{item.name}</h4>
        <p>{item.location}</p>
      </Link>
    );
  });

  return (
    <div className="rl-parent">
      <div className="rl-title">
        <p>My Restaurants</p>
      </div>

      <p>
        When my mom sometimes sighs and says, "You used to be such a happy
        child," which past is being mourned as having "used to be"? "You used to
        be a child," I supposed, is sad in itself, in the way that time passing
        is often sad. But everyone aside from babies used to be a child, so it
        can't be that sad. "You used to be happy" is what it feels like that
        phrase really means. "Why aren't you happy anymore?" is what that phrase
        feels like it's asking. I have started to noticed, in describing my
        brother's child-hood, my mom likes to say, "You were always such a happy
        child."
      </p>

      {restaurants}

      <div className="rl-add-button-div">
        <p> ADD RESTAURANT</p>
        <Link to="/restaurants/add">
          <button className="rl-add-button">+</button>
        </Link>
      </div>
      
    </div>
  );
};

export default RestaurantList;
