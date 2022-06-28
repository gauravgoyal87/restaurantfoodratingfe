import React from "react";
import { Link, useParams } from "react-router-dom";
import Food from "./Food";

const FoodList = (props) => {

    // const restaurants = props.restaurants
    const id = useParams().id
    // const restaurant = restaurants[id]

    let foodList = props.foods.map(item => {
        return (
            <div key={item._id}>
                <h1>{item.dish}</h1>
                <h3>{item.comment}</h3>
                <Link to={`/${id}/${item._id}/edit`}>
                    <button>Edit Food</button>
                </Link>
                <button>Delete Food</button>
            </div>
        )
    })   

    return (
        <div>
            <h2>Food List</h2>
            <Link to={`/${id}/add`}>
                <button>Add New Food</button>
            </Link>
            {foodList}
        </div>
    )
}

export default FoodList