import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/accueilBanner.jpg";
import MenuHommeImg from "../assets/homme.jpg";
import MenuFemmeImg from "../assets/femme.jpg";
import Logo from "../assets/Logo.png";
import "../styles/Home.css";
import Produit from '../components/Produit';

function Home() {
  return (
    <div className="body">
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
        <img src={Logo} />
          <h1>Service d'entrainement pour un futur viking</h1>
          
        <Link to="/menu">
          <button> Rejoins moi ! </button>
        </Link>
      </div>
      
    </div>
    <div className="menuHF">
      <div className="titre"><h2>Deviens aussi fort qu'un viking</h2></div>
          <div className="card" >
          <Link to="/menu"><div className="homme"style={{ backgroundImage: `url(${MenuHommeImg})` }}></div></Link>
          <Link to="/menu"><div className="femme" style={{ backgroundImage: `url(${MenuFemmeImg})` }}></div></Link>
          </div>       
      </div>
      <div className="menuHF">
      <div className="titre"><h2>Deviens fort meme sans materiel</h2></div>
          <div className="card" >
          <Link to="/menu"><div className="homme"style={{ backgroundImage: `url(${MenuHommeImg})` }}></div></Link>
          <Link to="/menu"><div className="femme" style={{ backgroundImage: `url(${MenuFemmeImg})` }}></div></Link>
          </div>       
      </div>
      <div className="cardProduit">
      <Produit></Produit>
     
      </div>
    
    </div>
    
  );
}

export default Home;
