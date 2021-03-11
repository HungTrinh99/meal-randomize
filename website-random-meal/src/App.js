import React, { useState } from "react";
import "./App.css";
import { RandomMeal } from "./components/RandomMeal";
import axios from "axios";
import { MealDetail } from "./components/MealDetail";
import { Spinner } from "./components/Spinner";
import { Header } from "./layout/Header";
function App() {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);
  const getMeal = () => {
    const api = "https://www.themealdb.com/api/json/v1/1/random.php";

    axios
      .get(api)
      .then((res) => {
        setLoading(true);
        setMeal(res.data.meals[0]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <Header/>
      
      <div className="container">
        <RandomMeal getMeal={getMeal} />
        {loading ? <Spinner /> : null}
        {meal ? (
          <MealDetail meal={meal} />
        ) : (
          <p className="title">Get the random meal by click above</p>
        )}
      </div>
    </div>
  );
}

export default App;
