import React from "react";
import { Link } from "react-router-dom";

const AddRestaurant = () => {
    return (
        <div>
            <h3>Add Restaurant</h3>
            <Link to="/restaurants">
                <button>Submit</button>
            </Link>
            <Link to="/restaurants">
                <button>Back</button>
            </Link>
        </div>
    )
}

export default AddRestaurant