import React from "react";
import "./Slider.scss";
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <div className="slider">
      <div className="container">
        <div className="texts">
          <h1>
            Unleashing the Flavors of Freshness, Served Daily Here{" "}
          </h1>
          <p>
            This is a type of restaurant which typical serves food and drinks,
            in addition to light refreshment such as baked good or snacks. The
            term comes from the french word meaning food.
          </p>
          <div className="buttons">

           <Link to="/Menu" ><button>Explore Food</button></Link>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Slider;
