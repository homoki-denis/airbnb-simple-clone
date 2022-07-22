import React from "react";
import img from "../images/main-img.png";

function Main() {
  return (
    <div className="main content-container">
      <img className="main-img" src={img} alt="img" />
      <div className="main-section">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default Main;
