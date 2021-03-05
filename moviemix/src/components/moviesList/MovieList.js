import React from "react";
import { useCommand } from "../../context/Context";
import Movie from "./movie/Movie";
import "./MovieList.css";

const MovieList = () => {
  const { movies } = useCommand();
  console.log(movies);

  movies.map((obj) => ({
    title: obj.title,
    original_name: obj.original_name,
    poster_path: obj.poster_path,
    release_date: obj.release_date,
    first_air_date: obj.first_air_date,
    vote_average: obj.vote_average,
    overview: obj.overview,
    id: obj.id,
  }));

  return (
    <div className="movielist">
      <div className="movielist__movies">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            overview={movie.overview}
            title={movie.title}
            original_name={movie.original_name}
            first_air_date={movie.first_air_date}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
