import React from "react";
import "./fooddash.css";

const Fooddash = ({ imageName, altTitle }) => {
  return (
    <div className="fooddash">
      <div className="image-container">
        <img src={imageName} alt={altTitle} />
      </div>
      <div>
        <h3>Stir Fry Pasta</h3>
      </div>
      <div>
        <p className="fooddetails">
          The in-house pasta and chicken by Chef Moose
        </p>
      </div>
      <div className="food-price">
        <div>
          <p className="price">N 1000.00</p>
        </div>
        <div>
          <p className="cartt">Add to Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Fooddash;
