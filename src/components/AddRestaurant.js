import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AddRestaurant = () => {

  const [form, setForm] = useState({});

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
    axios.post("https://greasespoon2.herokuapp.com/api/restaurant", form).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="ar-parent">
      <div className="ar-title">
        <p>Add Restaurant</p>
      </div>

      <form className="ar-form" action="">
        <input
          type="text"
          placeholder="NAME"
          id="restaurantName"
          onChange={handleName}
        />

        <input type="text" placeholder="CUISINE" />
        <input
          type="text"
          placeholder="LOCATION"
          id="location"
          onChange={handleLocation}
        />

        <div className="ar-buttons">
          <Link to="/restaurants">
            <button className="ar-cancel">CANCEL</button>
          </Link>
          <Link to={`/${form.name}/add`}>
            <button className="ar-next" onClick={handleSubmit}>
              NEXT: ADD FOOD
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
