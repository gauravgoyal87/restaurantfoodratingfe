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