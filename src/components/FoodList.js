import React from "react";
import { Link, useParams } from "react-router-dom";
import Food from "./Food";

const FoodList = (props) => {

    const restaurants = props.restaurants
    const id = useParams().id
    const restaurant = restaurants[id]

    let foodList = restaurant.foods.map(item => {
        return (
            <div key={item.price}>
                <h3>{item.foodName}</h3>
                <h3>$ {item.price}</h3>
            </div>
        )
    })

    return (
        <div>
            <h2>Food List</h2>
            <Link to="/:id/add">
                <button>Add New Food</button>
            </Link>
            {foodList}
            <Food foodList={foodList} />
        </div>
    )
}

export default FoodList