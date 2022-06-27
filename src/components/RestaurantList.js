import React from "react";
import { Link } from "react-router-dom";

const RestaurantList = (props) => {

    let restaurants = props.restaurants.map((item, index) => {
        return (
            <Link key={index} to={`/${index}`}>
                <h4>{item.restaurantName}</h4>
                <p>{item.location}</p>
            </Link>
        )
    })

    return (
        <div>
            <h2>Restaurant List</h2>
            <Link to="/restaurants/add">
                <button>Add New Restaurant</button>
            </Link>
            {restaurants}
        </div>
    )
}

export default RestaurantList