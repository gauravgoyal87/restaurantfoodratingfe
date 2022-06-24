import React from "react";
import { Link } from "react-router-dom";

const AddFood = () => {
    return (
        <div>
            <h3>Add Food</h3>
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