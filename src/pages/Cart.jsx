import React from 'react';
import CartComponent from '../components/CartComponent';
import {cart} from '../helpers/CartList'
import { useState } from 'react';



//Page du panier d'achat.
//Cette page va aussi permettre d'ajouter ou d'enlever un objet du panier d'achat avec un UseState

export default function Cart() {

  let quantite = cart.length;
  const [qte,refreshQte] =useState(quantite);

  cart.map(e => console.log(e.name))
  return (
    <div className='shoppingBody'>
      <p className='objetPanier'>{qte < 1 ? 'Panier vide' : qte + ' Objets dans votre panier'} </p>
        {cart.map(e => <CartComponent 
        refreshQte={refreshQte}
        key={e.name}
        name= {e.name}
        price={e.price}
        image={e.image}
        />)}

    </div>
  );
}