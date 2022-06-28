import React from "react";
import { Link, useParams } from "react-router-dom";
import FoodList from "./FoodList";

const Restaurant = (props) => {

    const id = useParams().id

    return (
        <div>
            <h2>Restaurant</h2>
            <Link to={`/${id}/edit`}>
                <button>Edit Restaurant</button>
            </Link>
            <button>Delete Restaurant</button>
            <FoodList restaurants={props.restaurants} />
        </div>
    )
}

export default Restaurant