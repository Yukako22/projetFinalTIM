import React from "react";
import {cart} from '../helpers/CartList'
import "../styles/Homme.css";

//Importation du système de panier d'achat.
//Ce script permet d'ajouter et de dire ce qu'on désire avoir dans chaque objet.

function Item({ item }) {
  const {image, name,  price}=item;

  function ajouterPanier(name,price,image){
    
    const product = {
      image:image,
      name:name,
      price:price,
      
    }
    
    cart.push(product)
    console.log(cart)
  }

  return (
    <div className="bodyHomme" >
      
      <div className="profilBulle">
          <div className="bulle" style={{ backgroundImage: `url(${image})` }}><button className="btn-Prog" onClick={( ) => ajouterPanier(name,price,image)}>Ajouter</button></div>
      </div>
      <div className="sousTitreBulle">
        <h3>{name}</h3> 
      </div>
    
    </div>
    
  );
}


export default Item;
