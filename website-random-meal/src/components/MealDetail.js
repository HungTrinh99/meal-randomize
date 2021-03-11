import React from "react";

export const MealDetail = ({ meal }) => {
  const {
    strMeal,
    strMealThumb,
    strInstructions,
    strArea,
    strCategory,
    strYoutube,
  } = meal;
  let mealIngredients = [];
  for (let i = 1; i <= 20; i++) {
    let ingredient = `strIngredient${i}`;
    let measure = `strMeasure${i}`;
    if (meal[ingredient] !== "") {
      let ingredientValue = meal[ingredient] + "-" + meal[measure];
      mealIngredients.push(ingredientValue);
    }
  }
  console.log(mealIngredients);
  return (
    <div className="meal-wrp">
      <div className="row">
        <div className=" col-12 col-md-4  meal-thumbnail">
          <img src={strMealThumb} alt="meal avt" />
        </div>
        <div className=" col-12 col-md-8 ">
          <p className="title text-uppercase">{strMeal}</p>
          <div className="meal-ingredients">
            <p>Ingredients</p>
            <ul>
              {mealIngredients.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
          <p>Origin: {strArea}</p>
          <p>Category: {strCategory}</p>
        </div>
      </div>
      <div className="meal-instruction mt-5">
        <h5>Cooking instructions:</h5>
        <p className="coocking-instruction">{strInstructions}</p>
      </div>
      <div className="video-recipe">
        <h5>Video recipe:</h5>
        <div className="d-flex justify-content-center align-items-center">
          <iframe
            width="420"
            height="345"
            src={strYoutube}
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
