import React from "react";
import "./GenresList.css";
import Button from "../utility/buttons/Button";
import genres from "./genresTypes";
import { useCommand } from "../../context/Context";
import Movie from "../moviesList/movie/Movie";

const GenresList = () => {
  const { setMovieType } = useCommand();

  const setMovie = (event) => {
    setMovieType(event.target.innerHTML);
  };

  return (
    <div className="genreList">
      <div className="genreList__heading">
        <h1> MovieMix </h1>
      </div>
      {/* <div className="genreList__genreName">Generic Movies</div> */}
      {genres.map((genre) => (
        <div key={genre.keyword} className="genreList__movies">
          <Button name={genre.keyword} handleButtonClick={setMovie} />
        </div>
      ))}
      {/* <Movie /> */}
    </div>
  );
};

export default GenresList;
