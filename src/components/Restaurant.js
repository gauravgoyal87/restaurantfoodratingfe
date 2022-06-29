import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import FoodList from "./FoodList";

const Restaurant = (props) => {

  const restName = useParams().restName;

  const handleDelete = () => {
    axios.delete(`http://localhost:4040/api/restaurant/${restName}`);
    props.getRes();
  };

  return (
    <div className="restaurant-parent">
      <div className="restaurant-title">
        <p>Whatever name of Restaurant is</p>
      </div>
      <FoodList
        restaurants={props.restaurants}
        foods={props.foods}
        getFood={props.getFood}
      />
      <p>
        Of course it hurt that we could never love each other in a physical way.
        We would have been far more happy if we had. But that was like the
        tides, the change of seasons-- something immutable, an immovable destiny
        we could never alter.
      </p>
      <div className="rl-add-button-div">
        <p>ADD FOOD</p>
        <Link to={`/${restName}/add`}>
          <button className="rl-add-button">+</button>
        </Link>
        <p>EDIT RESTAURANT</p>
        <Link to={`/${restName}/edit`}>
          <button className="rl-add-button">Z</button>
        </Link>
        <p>DELETE RESTAURANT</p>
        <Link to="/restaurants" onClick={() => handleDelete()}>
          <button className="rl-add-button">X</button>
        </Link>
      </div>
    </div>
  );
};

export default Restaurant;
