import React from "react";

function Food({ name, img }) {
  return (
    <div>
      <h1>{name}</h1>
      <img alt={name} src={img}></img>
    </div>
  );
}
export default Food;
