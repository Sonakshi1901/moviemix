import React from "react";
import { useCommand } from "../../../context/Context";

const GenreCard = () => {
  const { movies } = useCommand();
  console.log(movies);
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <div>{movie.adult ? "yes" : "No"}</div>
          <h1> {movie.backdrop_path} </h1>
          <h1>{movie.overview}</h1>
        </div>
      ))}
    </div>
  );
};

export default GenreCard;
