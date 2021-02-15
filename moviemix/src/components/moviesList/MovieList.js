import React from "react";
import { useCommand } from "../../context/Context";
import Movie from "./movie/Movie";

const MovieList = () => {
  const { movies } = useCommand();
  console.log(movies);
  return (
    <>
      {movies.map((movie) => (
        <Movie />
      ))}
    </>
  );
};

export default MovieList;
