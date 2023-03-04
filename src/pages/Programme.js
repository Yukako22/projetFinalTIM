import React from "react";
import { ListProgHomme } from "../helpers/PlanEntrainement";
import { ListProgFemme } from "../helpers/PlanEntrainement";

import Item from "../components/Item";

import "../styles/Programme.css";

//CEtte pages est celle de la pages pour les plans d'entrainement pré-fait
//Elle appel aussi le tableau du components Liste programmes en utilisant le component de item

function Programme() {
  return (
    <div className="bodyProg">
      <h1 className="progTitle">Programmes</h1>
      <div className="programme">
        <h2>Hommes</h2>
        <div className="programmesHomme">
          {ListProgHomme.map((item) => {
            return <Item key={item.id} item={item} />;
          })}
        </div>
        <h2>Femmes</h2>
        <div className="programmesFemme">
          {ListProgFemme.map((item) => {
            return <Item key={item.id} item={item} />;
          })}
        </div>
      </div>
      <a className="top" href="#top">
        Retour en haut
      </a>
    </div>
  );
}

export default Programme;
