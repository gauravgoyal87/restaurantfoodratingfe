import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"
import axios from "axios";
// const api = "http://localhost:4040/api/"

// function goHome() {
//   const [toHome, setToHome] = React.useState(false);

//   if (toHome === true) {
//     return <Navigate to="/foodList" />;
//   }

//   return (
//     <div>
//       <h1>Register</h1>
//       <Form afterSubmit={() => toDashboard(true)} />
//     </div>
//   );
// }

const AddFood = () => {
  // const navigate = useNavigate()
  // function goHome() {
  //   const [toHome, setToHome] = useState()
  
  //   if (toHome === true) {
  //     return <navigate to="/foodList" />;
  //   }
  return (
    <div>
      <form action="http://localhost:4040/api/food" method="POST">
        <input type="text" placeholder="image" name="image" />
        <input type="text" placeholder="dish" name="dish" />
        <input type="text" placeholder="comment" name="comment" />
        <input type="number" placeholder="rating" name="rating" />
        <button id="muButton" type="submit">
          Submit!
        </button>
      </form>
        <Link to=":id/food">
          <button>Back</button>
        </Link>
    </div>
  );
};




// const AddFood = () => {
  // const navigate = useNavigate()
  // const onSubmit = (event) => {
  //     event.preventDefault()
  //     console.log("submit clicked")
  //     const fData = new FormData(event.target)
  //     const params = {image: fData.get("image"), dish: fData.get("dish"), 
  //     comment: fData.get("comment"), rating: fData.get("rating")
  //     }
  //    axios.post("http://localhost:4040/api/food", params)
  //     .then(() => {
  //         navigate("/")
  //     }).catch(console.error)
  // }

    // const [form, setForm] = useState({});

    // const handleImage = (e) => {
    //     setForm({
    //         image: e.target.value,
    //         dish: form.dish,
    //         comment: form.comment,
    //         rating: form.rating
    //     });
    //   }
  
    //   const handleDish = (e) => {
    //       setForm({
    //         image: form.image,
    //         dish: e.target.value,
    //         comment: form.comment,
    //         rating: form.rating
    //       });
    //   }
      
    //   const handleComment = (e) => {
    //       setForm({
    //         image: form.image,
    //         dish: form.dish,
    //         comment: e.target.value,
    //         rating: form.rating
    //       });
    //   }

    //   const handleRating = (e) => {
    //     setForm({
    //       image: form.image,
    //       dish: form.dish,
    //       comment: form.comment,
    //       rating: e.target.value
    //     });
    // }
  
      // const handleSubmit = () => {

      //   }
      //     console.log(form)
  
  //     return (
  //         <div>
  //             <h3>Add Food</h3>
  //             <form >
  //                 <input type='text' placeholder='Image' name='image'/>
  //                 <input type='text' placeholder='Dish' name='dish'/>
  //                 <input type='text' placeholder='Comment' name='comment'/>
  //                 <input type='number' placeholder='Rating' name='rating'/>
  //                 <Link to=':id/food'>
  //                     <button onClick={onSubmit}>Submit</button>
  //                 </Link>
  //             </form>
  //             <Link to=":id/food">
  //                 <button  >Back</button>
  //             </Link>
  //         </div>
  //     )
  // }

export default AddFood

        // const [data, setData] = useState([])
        // const api = "http://localhost:4040/api/"
        // useEffect(() => {
        //     axios.get(api)
        //       .then(res => {
        //         setData(res.data)
        //         console.log(res.data)
        //       })
        //       .catch(console.error)
        //   }, [])



    //     const navigate = useNavigate()
    //     const onSubmit = (event) => {
    //         event.preventDefault()
    //         const fData = new FormData(event.target)
    //         const params = {date: fData.get("date"), location: fData.get("location"), 
    //         time: `${fData.get("time-hour")}:${fData.get("time-minute")}`, task: fData.get("task")
    //         }
    //        axios.post("http://localhost:4000/api/calendar", params)
    //         .then(() => {
    //             navigate("/")
    //         })
    //     }
    //     return (
    //         <div>
    //             <form onSubmit={onSubmit}>
    //                 <input name="date" type="date">
    //                 </input>
    //                 <input name="time-hour" type="number">
    //                 </input>
    //                 <input name="time-minute" type="number">
    //                 </input>
    //                 <input name="location" type="text">
    //                 </input>
    //                 <input name="task" type="text">
    //                 </input>
    //                 <button>
    //                     Submit
    //                 </button>
    //             </form>
    //         </div>
    //     )
    // }