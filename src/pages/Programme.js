import React from "react";
import { ListProgHomme } from "../helpers/Femme";
import { ListProgFemme } from "../helpers/Femme";

import ProduitItem from "../components/Item";
import "../styles/Produit.css";
import "../styles/Programme.css";

function Programme() {
  return (
    <div className="bodyProg">
      <h1 className="progTitle">Programmes</h1>
      <div className="programme">
      <h2>Hommes</h2>
        <div className="programmesHomme">
          
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
        <h2>Femmes</h2>
        <div className="programmesFemme">
        
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
      
    </div>
  );
}

export default Programme;
