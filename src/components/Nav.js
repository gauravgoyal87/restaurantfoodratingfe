import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <Link to="/">
                <h2>Home</h2>
            </Link>
            <Link to="/restaurants">
                <h2>All Restaurant</h2>
            </Link>
        </div>
    )
}

export default Nav