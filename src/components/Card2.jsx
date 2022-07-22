import React from "react";
import img from "../images/Star.png";

function Card2(props) {
  //   console.log(props);
  return (
    <div className="card-container">
      <div className="card">
        <div
          className="card-img"
          style={{
            backgroundImage: `url("${props.avatar}")`,
          }}
        ></div>

        <div className="card-section">
          <img src={img} alt="star" /> <span> {props.name}</span>
          <p className="card-title">{props.actualJob}</p>
          <span className="card-description">{props.shortDesctioption}</span>
          <div className="social-links">
            <a href={props.socialMediaLiks.gitHub}>
              <i class="fa-brands fa-github fa-xl"></i>
            </a>
            <a href={props.socialMediaLiks.linkedIn}>
              <i class="fa-brands fa-linkedin fa-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
