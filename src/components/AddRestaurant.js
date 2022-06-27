import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const AddRestaurant = () => {

    const [form, setForm] = useState({});

    const handleName = (e) => {
      setForm({
        name: e.target.value,
        price: form.price,
        review: form.review,
      });
    }

    const handlePrice = (e) => {
        setForm({
          name: form.menuName,
          price: e.target.value,
          review: form.review,
        });
    }
    
    const handleReview = (e) => {
        setForm({
          name: form.menuName,
          price: form.price,
          review: e.target.value,
        });
    }

    const handleSubmit = () => {
        console.log(form)
    }

    return (
        <div>
            <h3>Add Restaurant</h3>
            <form action=''>
                <input type='text' placeholder='Name' id='menuName' onChange={handleName} />
                <input type='text' placeholder='Price' id='price' onChange={handlePrice} />
                <input type='text' placeholder='Review' id='review' onChange={handleReview} />
                <Link to='/restaurants'>
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