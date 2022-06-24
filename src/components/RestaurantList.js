import React from "react";
import { Link } from "react-router-dom";

const RestaurantList = () => {
    return (
        <div>
            <h2>Restaurant List</h2>
            <Link to="/restaurants/add">
                <button>Add New Restaurant</button>
            </Link>
            <Link to="/1">
                <li>Restaurant 1</li>
            </Link>
            <Link to="/2">
                <li>Restaurant 2</li>
            </Link>
        </div>
    )
}

export default RestaurantList