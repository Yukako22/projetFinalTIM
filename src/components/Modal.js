

function Modal(props) {
    return (
      <div className='modal'>
        <div className="produitAchat">
        
        </div>
        <p>{props.text}</p>
        <button className='btn btn--alt' onClick={props.onClose}>
          Cancel
        </button>
        <button className='btn btn--alt' onClick={props.onClose}>
          Confirm
        </button>
      </div>
    );
  }
  
  export default Modal;