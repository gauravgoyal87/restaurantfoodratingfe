import React from "react";
import { Link } from "react-router-dom";
import { useState, useNavigate } from "react";

const AddFood = () => {

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
        // const navigate = useNavigate
        // const onSubmit = (event) => {
        //     event.preventDefault()
        //     const fData = new FormData(event.target)
        //     const params = {}
        }
          console.log(form)
  
      return (
          <div>
              <h3>Add Food</h3>
              <form>
                  <input type='text' placeholder='Image' id='image' onChange={handleImage} />
                  <input type='text' placeholder='Dish' id='dish' onChange={handleDish} />
                  <input type='text' placeholder='Comment' id='comment' onChange={handleComment} />
                  <input type='number' placeholder='Rating' id='rating' onChange={handleRating} />
                  <Link to=':id/food'>
                      <button onClick={handleSubmit}>Submit</button>
                  </Link>
              </form>
              <Link to=":id/food">
                  <button>Back</button>
              </Link>
          </div>
      )
  }


export default AddFood