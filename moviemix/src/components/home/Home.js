import React from "react";
import "./Home.css";
import Movie from "../moviesList/movie/Movie";
import Button from "../utility/buttons/Button";

const Home = () => {
  return(
    <div className = "Home">
     <Movie/>
     <Button name = "Show"/>
    </div>
  );
};

export default Home;
