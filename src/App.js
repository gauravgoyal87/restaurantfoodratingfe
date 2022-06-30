
import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import AddFood from './components/AddFood';
import AddRestaurant from './components/AddRestaurant';
import EditFood from './components/EditFood';
import EditRestaurant from './components/EditRestaurant';
import Food from './components/Food';
import FoodList from './components/FoodList';
import Home from './components/Home';
import Nav from './components/Nav';
import Restaurant from './components/Restaurant';
import RestaurantList from './components/RestaurantList';

const App = () => {

  const [rest, setRes] = useState([]);
  const [food, setFood] = useState([])
  
  useEffect(() => {
    getRes()
    getFood()
  }, [rest])

  const getRes = () => {
    axios.get('https://greasespoon2.herokuapp.com/api/restaurant')
    .then((r) => {
      const rests = r.data
      setRes(rests)
    }).catch((error) => {
        console.log(error)
      })
  }

  const getFood = () => {
    axios.get('https://greasespoon2.herokuapp.com/api/food')
    .then((r) => {
      const foods = r.data
      setFood(foods)
    }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>

          <Route path="/"element={<Home />} />
          <Route path="/restaurants" element={<RestaurantList restaurants={rest} />} />
          <Route path="/restaurants/add" element={<AddRestaurant restaurants={rest} setRes={setRes} />} />
          <Route path="/:restName" element={<Restaurant restaurants={rest} getRes={getRes} foods={food} getFood={getFood} />} />
          <Route path="/:restName/edit" element={<EditRestaurant />} />
          <Route path="/:restName/add" element={<AddFood />} />
          <Route path="/:restName/foods" element={<FoodList />} />
          <Route path="/:restName/:foodName" element={<Food />} />
          <Route path="/:restName/:foodName/edit" element={<EditFood />} />

        </Routes>
          <div className="footer">
                  <img src="imgs/VectorLeft.png" alt="" />
                  <img src="imgs/VectorRight.png" alt="" />
          </div>
      </main>
    </div>
  );
};

export default App;
