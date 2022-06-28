import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AddFood = () => {
  const restName = useParams().restName;

  const [form, setForm] = useState({
    image: "",
    dish: "",
    comment: "",
    rating: "",
    restaurantName: restName,
  });

  const handleImage = (e) => {
    setForm({
      image: e.target.value,
      dish: form.dish,
      comment: form.comment,
      rating: form.rating,
      restaurantName: restName,
    });
  };

  const handleDish = (e) => {
    setForm({
      image: form.image,
      dish: e.target.value,
      comment: form.comment,
      rating: form.rating,
      restaurantName: restName,
    });
  };

  const handleComment = (e) => {
    setForm({
      image: form.image,
      dish: form.dish,
      comment: e.target.value,
      rating: form.rating,
      restaurantName: restName,
    });
  };

  const handleRating = (e) => {
    setForm({
      image: form.image,
      dish: form.dish,
      comment: form.comment,
      rating: e.target.value,
      restaurantName: restName,
    });
  };

  const handleSubmit = () => {
    axios.post("http://localhost:4040/api/food", form).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <p>Add Food</p>

      <form action="">
        <input
          type="text"
          placeholder="Image"
          id="image"
          onChange={handleImage}
        />
        <input type="text" placeholder="Dish" id="dish" onChange={handleDish} />
        <input
          type="text"
          placeholder="Comment"
          id="comment"
          onChange={handleComment}
        />
        <input
          type="number"
          placeholder="Rating"
          id="rating"
          onChange={handleRating}
        />
        <Link to={`/${restName}`}>
          <button onClick={handleSubmit}>Submit</button>
        </Link>
        <Link to={`/${restName}`}>
          <button>Back</button>
        </Link>
      </form>
    </div>
  );
};

export default AddFood;
