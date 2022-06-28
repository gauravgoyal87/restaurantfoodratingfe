import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"
import axios from "axios";
// const api = "http://localhost:4040/api/"

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
      axios.post('http://localhost:4040/api/food', form)
      .then(res => {
          console.log(res.data)
      })
  }
  
      return (
          <div>
              <h3>Add Food</h3>
              <form >
                  <input type='text' placeholder='Image' name='image' onChange={handleImage}/>
                  <input type='text' placeholder='Dish' name='dish' onChange={handleDish}/>
                  <input type='text' placeholder='Comment' name='comment' onChange={handleComment}/>
                  <input type='number' placeholder='Rating' name='rating' onChange={handleRating}/>
                  <Link to=':id/food'>
                      <button onClick={handleSubmit}>Submit</button>
                  </Link>
              </form>
              <Link to=":id/food">
                  <button onClick={handleSubmit} >Back</button>
              </Link>
          </div>
      )
  }

export default AddFood