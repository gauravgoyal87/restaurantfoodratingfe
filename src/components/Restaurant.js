import React from "react";
import { Link } from "react-router-dom";
import FoodList from "./FoodList";

const Restaurant = () => {

    return (
        <div>
            <h2>Restaurant</h2>
            <Link to="/:id/edit">
                <button>Edit Restaurant</button>
            </Link>
            <button>Delete Restaurant</button>
            <Link to="/:id/add">
                <button>Add Menu</button>
            </Link>

            <FoodList />
        </div>
    )
}

export default Restaurant