import React, { useState } from "react";
import "./Movie.css";
import Button from "../../utility/buttons/Button";
import logo from "../../../images/logo/MovieMix4.png";

const Movie = (props) => {
  //
  const [showDetailsPopUp, setShowDetailsPopUp] = useState(false);

  const handleDetails = () => {
    setShowDetailsPopUp(true);
    alert("handling details");
  };

  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="Card">
      <div className="movie-container">
        <img src={baseUrl + props.image} alt="img" />
      </div>
      <div className="movie-content">
        <div className="movie-content-header">
          <a href="##">
            <h3 className="movie-title">{props.movieName}</h3>
          </a>
        </div>

        <div className="info-section">
          <p>
            <span> Directed by - </span> {props.directorName}
          </p>
          <p>
            <span>Released on - </span> {props.dateOfRelease}
          </p>
        </div>
        <div className="movie__btn">
          <Button
            name="Details"
            handleButtonClick={handleDetails}
            newClass="btn__lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Movie;
