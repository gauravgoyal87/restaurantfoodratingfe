import React from "react";
import { Link } from "react-router-dom";

const AddFood = () => {
    return (
        <div>
            <h3>Add Food</h3>
            <form>
            <input type="text" name="user-input" id="image" placeholder="Image" />
            <input type="text" name="user-input" id="dish"placeholder="Food Name" />
            <input type="text" name="user-input" id="comment" placeholder="Comments"/>
            <input type="number" name="" id="rating" placeholder="0-5"/>
            </form>
            <Link to="/:id/foods">
                <button>Submit</button>
            </Link>
            <Link to=":id/foods">
                <button>Back</button>
            </Link>
        </div>
    )
}

export default AddFood

// image: String,
// dish: String,
// comment: String,
// rating: Number