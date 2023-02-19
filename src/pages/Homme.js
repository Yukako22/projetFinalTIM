import React from "react";
import "../styles/Homme.css";
import HommeImg from "../assets/homme.jpg";
import ProduitItem from "../components/ItemCard";
import { ProduitCardHomme } from "../helpers/ProduitList";


function Homme() {
  return (
    <div className="body">
      <h2>Choisi ton profil pour ton programme personalise</h2>
      <div className="profilBulle">
          <div className="bulle" style={{ backgroundImage: `url(${HommeImg})` }}><button className="btn-Prog">Ajouter</button></div>
          <div className="bulle" style={{ backgroundImage: `url(${HommeImg})` }}><button className="btn-Prog">Ajouter</button></div>
          <div className="bulle" style={{ backgroundImage: `url(${HommeImg})` }}><button className="btn-Prog">Ajouter</button></div>
          
      </div>
      <div className="sousTitreBulle">
        <h3>Masse</h3>
        <h3>Seche</h3>
        <h3>Accomplie</h3>
      </div>
      <h2>Ce que contient chaque programme</h2>
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
      <a className="top" href="#top">Retour en haut</a>
    </div>
    
  );
}

export default Homme;