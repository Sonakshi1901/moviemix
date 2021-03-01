import React from "react";
import "./GenresList.css";
import GenreCard from "../genresList/genresCard/GenreCard";
import genres from "./genresTypes";

const GenresList = () => {

  return (
    <div className="genreList">
      <div className="genreList__heading">
        <h1> MovieMix </h1>
      </div>

      <div className="genreList__movies">
       {genres.map((genre) => (
         <div key={genre.keyword}>
          <GenreCard
           name={genre.name}
           img={genre.img}
           keyword= {genre.keyword}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenresList;
