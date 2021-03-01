import React from "react";
import "./DetailsPopUp.css";

function DetailsPopUp({ overview, showDetailsPopUp }) {
  return(
    <>
      {showDetailsPopUp ?
         <div className="movie__details">
           <p className="movie__overview"><b>Overview:</b> {overview}</p>
         </div>
        : null}
    </>
  )
}

export default DetailsPopUp;
