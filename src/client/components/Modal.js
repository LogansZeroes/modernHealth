import React from 'react';

const Modal = ({handleClose, show, title, description}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName} onClick={handleClose}>
            <div className="modal-main">
                <div className="row">
                    <div className="modal-title">
                    {title} Program
                    </div>
                    <button onClick={handleClose}>&times;</button>
                </div>
                <div className="modal-content">
                {description}
                </div>
            </div>
        </div>
    );
}

export default Modal;
