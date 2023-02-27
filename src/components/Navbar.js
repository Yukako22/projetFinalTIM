import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { GiShoppingBag } from 'react-icons/gi';

//Fonction qui affiche les éléments de la barre de navigation (header)

function Navbar() {
  
  
  return (
    <div className="navbar">
      <div className="leftSide" >
      
      <img src={Logo} />
        
      </div>
      <div className="rightSide">
        <Link to="/"> Accueil </Link>
        <Link to="/homme"> Homme </Link>
        <Link to="/femme"> Femme </Link>
        <Link to="/about"> Moi </Link>
        <Link to="/programme"> Programmes </Link>
        
        
        
          
        
      </div>
      <div className="shopping">
        
        <Link to="/cart"> <GiShoppingBag /> </Link>
        
          
        
      </div>
    </div>
  );
}

export default Navbar;
