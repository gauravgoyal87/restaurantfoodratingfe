import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const FoodList = (props) => {

    const restName = useParams().restName
    const [allFood, setAllFood] = useState([])
    const [food, setFood] = useState([])
    
    const findFood = () => {
        for (let i=0; i<allFood.length; i++) {
            if (allFood[i].restaurantName === restName) {
                setFood(food => [...food, allFood[i]])
            }}
        // getFood()
    }
    const getFood = () => {
        axios.get('http://localhost:4040/api/food')
        .then((r) => {
          const foods = r.data
          setAllFood(foods)
        }).catch((error) => {
        console.log(error)
      })
    }

    useEffect(() => {
        getFood()
        // findFood()
    }, [])

    useEffect(() => {
        findFood()
    }, [allFood])

    const handleDelete = (e) => {
        axios.delete(`http://localhost:4040/api/food/id/${e.target.id}`)
        getFood()
    }

    let foodList = food.map(item => {

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