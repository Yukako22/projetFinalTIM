import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/accueilBanner.jpg";
import MenuHommeImg from "../assets/hommeviking.jpg";
import MenuFemmeImg from "../assets/femme.jpg";
import MenuHommeImg2 from "../assets/homme.jpg";
import MenuFemmeImg2 from "../assets/femmeSans.jpg";
import Logo from "../assets/Logo.png";
import "../styles/Home.css";
//import Produit from '../components/Produit';
import Item from "../components/Item";
import { ProduitList } from "../helpers/ProduitList";

function Home() {
  return (
    <div className="body">
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <img src={Logo} />
          <h1>Service d'entrainements pour un futur viking</h1>

          <Link to="/programme">
            <button> Rejoins-moi ! </button>
          </Link>
        </div>
      </div>
      <div className="menuHF">
        <div className="titre">
          <h2>Deviens aussi fort qu'un viking</h2>
        </div>
        <div className="card">
          <Link to="/Homme">
            <div
              className="homme"
              style={{ backgroundImage: `url(${MenuHommeImg})` }}
            ></div>
          </Link>
          <Link to="/Femme">
            <div
              className="femme"
              style={{ backgroundImage: `url(${MenuFemmeImg})` }}
            ></div>
          </Link>
        </div>
      </div>
      <div className="menuHF">
        <div className="titre">
          <h2>Deviens fort même sans materiel</h2>
        </div>
        <div className="card">
          <Link to="/Homme">
            <div
              className="homme"
              style={{ backgroundImage: `url(${MenuHommeImg2})` }}
            ></div>
          </Link>
          <Link to="/Femme">
            <div
              className="femme"
              style={{ backgroundImage: `url(${MenuFemmeImg2})` }}
            ></div>
          </Link>
        </div>
        <div className="titre">
          <h2>Il faut aussi muscler son cerveau</h2>
        </div>
        <div className="cardProduit">
          {ProduitList.map((item) => {
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

export default Home;
