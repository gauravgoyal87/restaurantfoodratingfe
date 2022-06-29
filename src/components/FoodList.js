import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Food from "./Food";

const FoodList = (props) => {

    // const restaurants = props.restaurants
    const restName = useParams().restName
    // const restaurant = restaurants[id]

    const handleDelete = (e) => {
        axios.delete(`http://localhost:4040/api/food/id/${e.target.id}`)
        props.getFood()
    }

    let foodList = props.foods.map(item => {

        return (
            <div key={item._id}>
                <h1>{item.dish}</h1>
                <h3>{item.comment}</h3>
                <Link to={`/${restName}/${item.dish}/edit`}>
                    <button>Edit Food</button>
                </Link>
                <Link to={`/${restName}/`} onClick={handleDelete} >
                    <button id={item._id} >Delete Food</button>
                </Link>
            </div>
        )
    })   

    return (
        <div>
            <h2>Food List</h2>
            {foodList}
        </div>
    )
}

export default FoodList