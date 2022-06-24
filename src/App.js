import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
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
  return (
    <div className="App">
      <h1>Team Spicy</h1>
      <Nav />
      <main>
        <Routes>
          <Route path="/"element={<Home />} />
          <Route path="/restaurants" element={<RestaurantList />} />
          <Route path="/restaurants/add" element={<AddRestaurant />} />
          <Route path="/:id" element={<Restaurant />} />
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
