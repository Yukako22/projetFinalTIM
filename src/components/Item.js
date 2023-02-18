import React from "react";


function Item({ image, name, desc, price }) {
  return (
    <div className="Item">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {desc}</p>
      <p> ${price} </p>
      <button className='btnProduit' >
            Ajouter
      </button>
    </div>
    
  );
}

export default Item;
