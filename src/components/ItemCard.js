import React from "react";


//Fonction pour les objets non achetable.
function Item({ image, name, desc, }) {
  return (
    <div className="Item">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p>{desc}</p>
    </div>
    
  );
}

export default Item;
