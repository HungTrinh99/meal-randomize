import React from "react";

export const RandomMeal = ({ getMeal }) => {
  return (
    <div className="d-flex justify-content-center align-items-cneter mb-5">
      <button onClick={getMeal} className="btn-search">
        <i className="fa fa-random mr-3"></i>Click me to get meal
      </button>
    </div>
  );
};
