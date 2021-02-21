import React from "react";
import "./GenreCard.css";
import Button from "../../utility/buttons/Button";
import { useCommand } from "../../../context/Context";


const GenreCard = (props) => {

  const { setMovieType } = useCommand();

  const setMovie = (event) => {
     let e = event.target.innerHTML;
     const name = e.substring(9);
     console.log(name);
     setMovieType(name);
  }

  return (
         <div className="GenreCard">
          <div className="genre-container">
            <p>Image of the genre </p>
          </div>
          <div className="genre-content">
              <div className="genre-type">
                <h3>{props.name}</h3>
              </div>

              <div className="genre-commands">
                 <p>User Commands</p>
              </div>

              <div className= "other-genres">
                <Button name={"Show All " + props.keyword} handleButtonClick={setMovie} />
              </div>
          </div>
         </div>
  );
};

export default GenreCard;
