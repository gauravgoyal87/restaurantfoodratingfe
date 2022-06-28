import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const AddRestaurant = () => {
  const [form, setForm] = useState({});

  const handleName = (e) => {
    setForm({
      restaurantName: e.target.value,
      location: form.location,
    });
  };

  const handleLocation = (e) => {
    setForm({
      restaurantName: form.restaurantName,
      location: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <div className="ar-parent">
      <h3>Add Restaurant</h3>
      <form action="">
        <input
          type="text"
          placeholder="Name"
          id="restaurantName"
          onChange={handleName}
        />
        <input
          type="text"
          placeholder="Location"
          id="location"
          onChange={handleLocation}
        />
        <Link to="/restaurants">
          <button onClick={handleSubmit}>Submit</button>
        </Link>
      </form>
      <Link to="/restaurants">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default AddRestaurant;
