import React from "react";
import logo from "../../images/logo/MovieMix4.png";
import "./Home.css";
import Movie from "../moviesList/movie/Movie.js";

const Home = () => {
  return (
    <div className="home">
      <img className="home__logo" src={logo} alt="logo" />
      <Movie/>
    </div>
  );
};

export default Home;
