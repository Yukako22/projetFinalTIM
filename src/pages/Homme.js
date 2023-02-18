import React from "react";
import { ListProgHomme } from "../helpers/Femme";
import { ListProgFemme } from "../helpers/Femme";

import ProduitItem from "../components/Item";
import "../styles/Produit.css";

function Programme() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Programmes</h1>
      <div className="menuList">
        <div className="programmeHomme">
        {ListProgHomme.map((Item, key) => {
          return (
            <ProduitItem
              key={key}
              image={Item.image}
              name={Item.name}
              price={Item.price}
            />
          );
        })}
        </div>
        <div className="programmeHomme">
        {ListProgFemme.map((Item, key) => {
          return (
            <ProduitItem
              key={key}
              image={Item.image}
              name={Item.name}
              price={Item.price}
            />
          );
        })}
        </div>
      </div>
      <button className='btn' >
            Ajouter
          </button>
    </div>
  );
}

export default Programme;