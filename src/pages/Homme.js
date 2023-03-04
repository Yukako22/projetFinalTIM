import React from "react";
import "../styles/Homme.css";
import ProduitItem from "../components/ItemCard";
import { ProduitCardHomme } from "../helpers/ProduitList";
import { progPersoH } from "../helpers/PlanEntrainement";
import Item from "../components/ItemPerso";

//Page d'entrainement pour les hommes avec le choix entre 3 profils.
//Cette page appel aussi le tableau des objets non achetable pour les hommes.

function Homme() {
  return (
    <div className="page">
      <h2>Choisi un profil pour ton programme personnalisé</h2>
      <div className="body">
        {progPersoH.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
      <h2>Ce que contient chaqu'un des programmes</h2>

      <div className="contenuProgramme">
        {ProduitCardHomme.map((Item, key) => {
          return (
            <ProduitItem
              key={key}
              image={Item.image}
              name={Item.name}
              desc={Item.desc}
            />
          );
        })}
      </div>
      <a className="top" href="#top">
        Retour en haut
      </a>
    </div>
  );
}

export default Homme;
