import { useState } from 'react';
import Produit1Img from "../assets/femme.jpg";
import Backdrop from './Backdrop';
import Modal from './Modal';



function Produit(props) {
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div className='cardProduit'>
      
      <div className='cardModal' style={{ backgroundImage: `url(${Produit1Img})` }}>
        <div className='cardText'></div>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick={showModalHandler}>
            Ajouter
          </button>
        </div>
        {showModal && <Backdrop onClick={closeModalHandler} />}
        {showModal && <Modal text='Ajouter au panier' onClose={closeModalHandler} />}
      </div>
      <div className='cardModal' style={{ backgroundImage: `url(${Produit1Img})` }}>
      <div className='cardText'></div>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick={showModalHandler}>
            Ajouter
          </button>
        </div>
        {showModal && <Backdrop onClick={closeModalHandler} />}
        {showModal && <Modal text='Ajouter au panier' onClose={closeModalHandler} />}
      </div>
      <div className='cardModal' style={{ backgroundImage: `url(${Produit1Img})` }}>
      <div className='cardText'></div>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick={showModalHandler}>
            Ajouter
          </button>
        </div>
        {showModal && <Backdrop onClick={closeModalHandler} />}
        {showModal && <Modal text='Ajouter au panier' onClose={closeModalHandler} />}
      </div>
      <div className='cardModal' style={{ backgroundImage: `url(${Produit1Img})` }}>
      <div className='cardText'></div>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick={showModalHandler}>
            Ajouter
          </button>
        </div>
        {showModal && <Backdrop onClick={closeModalHandler} />}
        {showModal && <Modal text='Ajouter au panier' onClose={closeModalHandler} />}
      </div>
      <div className='cardModal' style={{ backgroundImage: `url(${Produit1Img})` }}>
      <div className='cardText'></div>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick={showModalHandler}>
            Ajouter
          </button>
        </div>
        {showModal && <Backdrop onClick={closeModalHandler} />}
        {showModal && <Modal text='Ajouter au panier' onClose={closeModalHandler} />}
      </div>
      <div className='cardModal' style={{ backgroundImage: `url(${Produit1Img})` }}>
      <div className='cardText'></div>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick={showModalHandler}>
            Ajouter
          </button>
        </div>
        {showModal && <Backdrop onClick={closeModalHandler} />}
        {showModal && <Modal text='Ajouter au panier' onClose={closeModalHandler} />}
      </div>
      
    </div>
    
  );
}

export default Produit;