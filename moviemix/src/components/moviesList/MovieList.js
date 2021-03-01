import React from "react";
import { useCommand } from "../../context/Context";
import Movie from "./movie/Movie";
import "./MovieList.css";

const MovieList = () => {
  const { movies } = useCommand();
  console.log(movies);

  return (
    <div className="movielist">
      <div className="movielist__movies">
        {movies.map((movie) => (
          <Movie image={movie.backdrop_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
