import React from 'react';
import Modal from 'react-modal';

//returns template
const OptionModal = (props) => {
    return (
       <Modal  isOpen={!!props.selectedOption}  
        contentLabel="Select Option" 
        onRequestClose={props.handleClearSelectedOption}
        closeTimeoutMS={400}
        className="modal"
       >
          <h3 className="modal__title">Selected Options</h3>
          {props.selectedOption  && <p className="modal__body">{props.selectedOption}</p>}
          <button className="button" onClick={props.handleClearSelectedOption}>OKay</button>
       </Modal>
    )
}

export default OptionModal;
