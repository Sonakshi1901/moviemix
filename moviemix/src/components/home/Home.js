import React from "react";
import logo from "../../images/logo/MovieMix4.png";
import "./Home.css";
import Movie from "../moviesList/movie/Movie.js";
import Button from "../utility/buttons/Button";

const Home = () => {
  return(
    <div className = "Home">
     <Movie/>
     <Button name = "Show"/>
    </div>
  );
};
