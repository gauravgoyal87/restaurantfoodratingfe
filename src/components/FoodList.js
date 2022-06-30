import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const FoodList = (props) => {
  const restName = useParams().restName;
  const [allFood, setAllFood] = useState([]);
  const [food, setFood] = useState([]);

  const findFood = () => {
    for (let i = 0; i < allFood.length; i++) {
      if (allFood[i].restaurantName === restName) {
        setFood((food) => [...food, allFood[i]]);
      }
    }
  };
  const getFood = () => {
    axios
      .get("http://localhost:4040/api/food")
      .then((r) => {
        const foods = r.data;
        setAllFood(foods);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getFood();
  }, []);

  useEffect(() => {
    findFood();
  }, [allFood]);

  const handleDelete = (e) => {
    axios.delete(`http://localhost:4040/api/food/id/${e.target.id}`);
    window.location.reload(false);
  };

  let foodList = food.map((item) => {
    return (
      <div className="food-card" key={item._id}>
        <div className="fc-center">
          <img src="/imgs/rc-image.png" alt="" />
          <p className="fc-name">{item.dish}</p>
          <div className="rating-line">
            <p className="fc-rating">Rating</p>
            <img src="/imgs/star.png" alt="" />
            {item.rating}
          </div>

          <div className="fc-notes">{item.comment}</div>
        </div>
        <div className="rc-buttons">
          <Link to={`/${restName}/${item.dish}/edit`}>
            <img src="imgs/rc-edit.png" alt="" />
          </Link>
          <Link to={`/${restName}/`} onClick={handleDelete}>
            <img id={item._id} src="imgs/rc-delete.png" alt="" />
          </Link>
        </div>
      </div>
    );
  });

  return <div className="fc-parent">{foodList}</div>;
};

export default FoodList;
