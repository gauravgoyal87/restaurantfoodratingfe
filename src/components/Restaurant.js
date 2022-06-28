import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import FoodList from "./FoodList";

const Restaurant = (props) => {

    const id = useParams().id

    const handleDelete = () => {
        axios.delete(`http://localhost:4040/api/restaurant/${id}`)
        props.getRes()
    }

    return (
        <div>
            <h2>Restaurant</h2>
            <Link to={`/${id}/edit`}>
                <button>Edit Restaurant</button>
            </Link>
            <Link to="/restaurants" onClick={handleDelete}>
                <button>Delete Restaurant</button>
            </Link>
            <FoodList restaurants={props.restaurants} foods={props.foods} />
        </div>
    )
}

export default Restaurant