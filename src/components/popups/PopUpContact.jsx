import React from 'react'
import './popUpContact.css'

const PopUpContact = (props) => {
    return (props.trigger) ? (
        <>
        <div className="popup">
            <div className="popup-inner">
                <button className='close-btn' onClick={() => props.setTrigger(false)}>Cerrar</button>
                {props.children}
            </div>
        </div>
        </>
      ) : "";
}

export default PopUpContact