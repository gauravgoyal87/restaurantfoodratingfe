import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const EditFood = () => {
  const restName = useParams().restName;
  const foodName = useParams().foodName;

  const [form, setForm] = useState({
    image: "",
    dish: "",
    comment: "",
    rating: "",
    restaurant: restName,
  });

  const handleImage = (e) => {
    setForm({
      image: e.target.value,
      dish: form.dish,
      comment: form.comment,
      rating: form.rating,
      restaurant: restName,
    });
  };

  const handleDish = (e) => {
    setForm({
      image: form.image,
      dish: e.target.value,
      comment: form.comment,
      rating: form.rating,
      restaurant: restName,
    });
  };

  const handleComment = (e) => {
    setForm({
      image: form.image,
      dish: form.dish,
      comment: e.target.value,
      rating: form.rating,
      restaurant: restName,
    });
  };

  const handleRating = (e) => {
    setForm({
      image: form.image,
      dish: form.dish,
      comment: form.comment,
      rating: e.target.value,
      restaurant: restName,
    });
  };

  const handleSubmit = () => {
    axios
      .put(`https://greasespoon2.herokuapp.com/api/food/${foodName}`, form)
      .then((res) => {
        console.log(res.data);
      });
  };
  //   return (
  //     <div className="ef-parent">
  //       <div className="ef-title">
  //         <p>Edit Food</p>
  //       </div>

  {
    /* //       <form className="ef-form" action="">
//         <input
//           type="text"
//           placeholder="Image"
//           id="image"
//           onChange={handleImage}
//         />
//         <input type="text" placeholder="Dish" id="dish" onChange={handleDish} />
//         <input
//           type="text"
//           placeholder="Comment"
//           id="comment"
//           onChange={handleComment}
//         />
//         <input
//           type="number"
//           placeholder="Rating"
//           id="rating"
//           onChange={handleRating}
//         />
// </form>
//       const handleRating = (e) => {
//         setForm({
//           image: form.image,
//           dish: form.dish,
//           comment: form.comment,
//           rating: e.target.value,
//           restaurant: restName
//         });
//     }
  
//     const handleSubmit = () => {
//         axios.put(`http://localhost:4040/api/food/${foodName}`, form)
//         .then(res => {
//             console.log(res.data)
//         })
//     } */
  }
  return (
    <div className="ef-parent">
      <div className="ef-title">
        <p>Edit Food</p>
      </div>

      <form className="ef-form" action="">
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
        <div className="ef-buttons">
          <Link to={`/${restName}`}>
            <button className="ar-cancel">cancel</button>
          </Link>
          <Link to={`/${restName}`}>
            <button className="ar-next" onClick={handleSubmit}>
              Submit
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditFood;
