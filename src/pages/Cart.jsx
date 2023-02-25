import React from 'react';
import CartComponent from '../components/CartComponent';
import {cart} from '../helpers/CartList'
import { useState } from 'react';

export default function Cart() {

  let quantite = cart.length;
  const [qte,refreshQte] =useState(quantite);

  cart.map(e => console.log(e.name))
  return (
    <div>
      <p>{qte < 1 ? 'Panier vide' : qte + ' Objets dans votre panier'} </p>
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