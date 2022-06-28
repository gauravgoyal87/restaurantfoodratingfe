import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AddRestaurant = () => {

    const [form, setForm] = useState({
        name: '',
        location: ''
    });

    const handleName = (e) => {
        setForm({
            name: e.target.value,
            location: form.location
      });
    }

    const handleLocation = (e) => {
        setForm({
            name: form.name,
            location: e.target.value
        });
    }

    const handleSubmit = () => {
        axios.post('http://localhost:4040/api/restaurant', form)
        .then(res => {
            console.log(res.data)
        })
    }

    return (
        <div>
            <h3>Add Food</h3>
            <form action="">
                <input type="text" placeholder="Name" id="name" onChange={handleName} />
                <input type="text" placeholder="Location" id="location" onChange={handleLocation} />
                <Link to="/restaurants">
                    <button onClick={handleSubmit}>Submit</button>
                </Link>
            </form>
            <Link to="/restaurants">
                <button>Back</button>
            </Link>
        </div>
    )
}

export default AddRestaurant