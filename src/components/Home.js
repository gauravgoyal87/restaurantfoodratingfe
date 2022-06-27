import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([])
  const api = "http://localhost:4040/api/"
  useEffect(() => {
      axios.get(api)
        .then(res => {
          setData(res.data)
          console.log(res.data)
        })
        .catch(console.error)
    }, [])
    return (
        console.log(data)
        // <div>
        //     <p>I am a landing page</p>
        // </div>
    )
}

export default Home