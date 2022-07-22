import React from "react";
import Card from "./Card";
import data from "../MOCK_DATA.json";

function Cards() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return <div className="cards content-container">{cards}</div>;
}

export default Cards;
