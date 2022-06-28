import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const EditRestaurant = () => {

    const id = useParams().id

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
        axios.put(`http://localhost:4040/api/restaurant/${id}`, form)
        .then(res => {
            console.log(res.data)
        })
    }

    return (
        <div>
            <h3>Edit Restaurant</h3>
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

export default EditRestaurant