import React from "react";
import { Link } from "react-router-dom";
import Food from "./Food";

const FoodList = () => {
    return (
        <div>
            <h2>Food List</h2>
            <Link to="/:id/add">
                <button>Add New Food</button>
            </Link>
            <Food />
        </div>
    )
}

export default FoodList