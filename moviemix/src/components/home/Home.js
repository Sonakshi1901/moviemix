import React, { useEffect } from "react";
import { useCommand } from "../../context/Context";
import logo from "../../images/logo/MovieMix4.png";
import "./Home.css";
import { Route, Redirect } from "react-router-dom";
import Movie from "../moviesList/movie/Movie";
import Button from "../utility/buttons/Button";
import GenresList from "../genresList/GenresList";

const Home = (props) => {
  const { homeNextClicked, handleHomeNext } = useCommand();

  return (
    <div className="home">
      <img className="home__logo" src={logo} alt="logo" />
      <Button
        name="Next"
        newClass="btn__md"
        handleButtonClick={handleHomeNext}
      ></Button>
    </div>
  );
};

export default Home;
