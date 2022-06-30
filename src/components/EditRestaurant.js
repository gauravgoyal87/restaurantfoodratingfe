import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const EditRestaurant = () => {
  const restName = useParams().restName;

  const [form, setForm] = useState({
    name: "",
    location: "",
  });

  const handleName = (e) => {
    setForm({
      name: e.target.value,
      location: form.location,
    });
  };

  const handleLocation = (e) => {
    setForm({
      name: form.name,
      location: e.target.value,
    });
  };

  const handleSubmit = () => {
    axios
      .put(`https://greasespoon2.herokuapp.com/api/restaurant/${restName}`, form)
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className="er-parent">
      <div className="er-title">
        <p>Edit Restaurant</p>
      </div>

      <form className="er-form" action="">
        <input type="text" placeholder="Name" id="name" onChange={handleName} />
        <input
          type="text"
          placeholder="Location"
          id="location"
          onChange={handleLocation}
        />

        <div className="er-buttons">
          <Link to="/restaurants">
            <button className="ar-cancel">Cancel</button>
          </Link>
          <Link to="/restaurants">
            <button className="ar-next" onClick={handleSubmit}>
              Submit
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditRestaurant;
