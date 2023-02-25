import React, { useState } from "react";
import {cart} from '../helpers/CartList'


function Item({ item }) {
  const {image, name,  price,desc}=item;

  function ajouterPanier(name,price,image){
    
    const product = {
      image:image,
      name:name,
      price:price
    }
    
    cart.push(product)
    console.log(cart)
  }

  return (
    <div className="Item">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p>{desc}</p>
      <p> ${price} </p>
      <button className='btnProduit' onClick={( ) => ajouterPanier(name,price,image)} >
            Ajouter
      </button>
    </div>
    
  );
}


export default Item;
