import React from "react";
import "./DetailsPopUp.css";

const DetailsPopUp = (props) => {
  return(
    <div className="popup__box">
         <div className="movie__details">
          <span className="close-icon" onClick={props.handleClose}>x</span>
           <p className="movie__overview"><b>Overview:</b> {props.overview}</p>
         </div>
    </div>
  )
}

export default DetailsPopUp;
