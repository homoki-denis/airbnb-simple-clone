import React from "react";
import img from "../images/Star.png";

function Card(props) {
  //   console.log(props);
  return (
    <div className="card-container">
      <div className="card">
        <div
          className="card-img"
          style={{
            backgroundImage: `url("${props.img}")`,
          }}
        ></div>

        <div className="card-section">
          <img src={img} alt="star" />
          <span>
            {props.rating} ({props.person}) &#x2022; {props.first_name}
          </span>
          <p className="card-title">{props.title}</p>
          <span>
            From <span className="bolder">${props.price}</span> / person
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
