import React from "react";

function MenuItem({ image, name, desc, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {desc}</p>
      <p> ${price} </p>
    </div>
  );
}

export default MenuItem;
