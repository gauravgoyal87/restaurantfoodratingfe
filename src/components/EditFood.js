import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const EditFood = () => {

    const [form, setForm] = useState({});

    const handleImage = (e) => {
        setForm({
            image: e.target.value,
            dish: form.dish,
            comment: form.comment,
            rating: form.rating
        });
      }
  
      const handleDish = (e) => {
          setForm({
            image: form.image,
            dish: e.target.value,
            comment: form.comment,
            rating: form.rating
          });
      }
      
      const handleComment = (e) => {
          setForm({
            image: form.image,
            dish: form.dish,
            comment: e.target.value,
            rating: form.rating
          });
      }

      const handleRating = (e) => {
        setForm({
          image: form.image,
          dish: form.dish,
          comment: form.comment,
          rating: e.target.value
        });
    }
  
      const handleSubmit = () => {
          console.log(form)
      }
  
      return (
          <div>
              <h3>Edit Restaurant</h3>
              <form action=''>
                  <input type='text' placeholder='Image' id='image' onChange={handleImage} />
                  <input type='text' placeholder='Dish' id='dish' onChange={handleDish} />
                  <input type='text' placeholder='Comment' id='comment' onChange={handleComment} />
                  <input type='number' placeholder='Rating' id='rating' onChange={handleRating} />
                  <Link to=':id/foods'>
                      <button onClick={handleSubmit}>Submit</button>
                  </Link>
              </form>
              <Link to=":id/foods">
                  <button>Back</button>
              </Link>
          </div>
      )
  }

export default EditFood