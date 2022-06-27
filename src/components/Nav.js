import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-parent">
      <Link to="/">
        <img src="imgs/Logo.png" alt="Blub" />
      </Link>
    </div>
  );
};

export default Nav;
