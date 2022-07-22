import React from "react";
import img from "../images/main-img.png";

function Main() {
  return (
    <div className="main content-container">
      <img className="main-img" src={img} alt="img" />
    </div>
  );
}

export default Main;
