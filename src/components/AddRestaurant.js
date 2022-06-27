import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddRestaurant = () => {
    const navigate = useNavigate()
    const onSubmit = (event) => {
        event.preventDefault()
        const fData = new FormData(event.target)
        const params = {name: fData.get("name"), location: fData.get("location"),}
    }
}
axios.post("http://localhost:4040/api/restaurant", params).then(() => {
     navigate("/") 
     })
    return (
            <div>
                <form onSubmit={onSubmit}>
                    <input name="name" type="date">
                    </input>
                    <input name="location" type="number">
                    </input>
                </form>
            </div>
    )
            
{/* 
        <div>
            <h3>Add Restaurant</h3>
            <Link to="/restaurants">
                <button>Submit</button>
            </Link>
            <Link to="/restaurants">
                <button>Back</button>
            </Link>
        </div> }*/
//     )
// }

export default AddRestaurant

// Restaurant.create({
//     name: "Gaurav's House",
//     location: "Jersey City, NJ"
// }).then(gaurav => {
//     Food.create({
//         image: "test",
//         dish: "pulse candies",
//         comment: "very good",
//         rating: 9
//     })
// }),