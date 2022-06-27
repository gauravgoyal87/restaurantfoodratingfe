import React from "react";
import { Link } from "react-router-dom";
import FoodList from "./FoodList";

const Restaurant = (props) => {

    return (
        <div>
            <h2>Restaurant</h2>
            <Link to="/:id/edit">
                <button>Edit Restaurant</button>
            </Link>
            <button>Delete Restaurant</button>
            <FoodList restaurants={props.restaurants} />
        </div>
    )
}

export default Restaurant