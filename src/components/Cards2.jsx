import React from "react";
import data from "../family.json";
import Card2 from "./Card2";

function Cards2() {
  const cards = data.map((item) => {
    return <Card2 key={item.id} {...item} />;
  });
  return <div className="cards content-container">{cards}</div>;
}

export default Cards2;
