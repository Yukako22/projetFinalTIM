import React from "react";
import "../styles/Homme.css";
import FemmeImg from "../assets/noemie5.jpg";
import FemmeImg2 from "../assets/noemie2.jpg";
import FemmeImg3 from "../assets/noemie3.jpg";
import ProduitItem from "../components/ItemCard";
import { ProduitCardFemme } from "../helpers/ProduitList";
import { progPersoF} from "../helpers/PlanEntrainement";
import Item from "../components/ItemPerso";

//Page d'entrainement pour les femmes avec le choix entre 3 profils.
//Cette page appel aussi le tableau des objets non achetable pour les femmes

function Femme() {
  return (
<div className="page">
      <h2>Choisi ton profil pour ton programme personalise</h2>
      <div className="body">
      
      {progPersoF.map((item) => {
        
        return (
          <Item 
          key={item.id} item={item} 
            
            
          />
        );
      })}
      </div>
      <h2>Ce que contient chaque programme</h2>
      <div className="contenuProgramme">
      {ProduitCardFemme.map((Item, key) => {
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
      <a className="top" href="#top">Retour en haut</a>
    </div>
    
  );
}

export default Femme;