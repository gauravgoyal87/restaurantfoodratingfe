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
  
  useEffect(() => {
    axios.get('http://localhost:4040/api/restaurant')
    .then((r) => {
      const rests = r.data
      setRes(rests)
    }).catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/"element={<Home />} />
          <Route path="/restaurants" element={<RestaurantList restaurants={rest} />} />
          <Route path="/restaurants/add" element={<AddRestaurant />} />
          <Route path="/:id" element={<Restaurant restaurants={rest} />} />
          <Route path="/:id/edit" element={<EditRestaurant />} />
          <Route path="/:id/add" element={<AddFood />} />
          <Route path="/:id/foods" element={<FoodList />} />
          <Route path="/:id/:foodId" element={<Food />} />
          <Route path="/:id/:foodId/edit" element={<EditFood />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
