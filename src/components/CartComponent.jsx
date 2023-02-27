import {cart} from '../helpers/CartList'
import "../styles/Cart.css";
//Fonction pour la création du panier d'achat.
//Cette fonction permet d'ajouter ou d'enlever divers éléments de la page d'achat.

export default function CartComponent(props){
    
    
    
    function enleverObjet(name){
        console.log(name);
        const index = cart.findIndex(product => {return product.name === name } )
        cart.splice(index,1);
        props.refreshQte(prev => cart.length);
    }
    return (
        <div className="shopCard">
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <p>{props.price}</p>
            <button onClick={() => enleverObjet(props.name)}> X </button>
        </div>
    )
};