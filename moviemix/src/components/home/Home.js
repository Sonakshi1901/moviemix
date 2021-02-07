import React from "react";
import logo from "../../images/logo/MovieMix4.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img className="home__logo" src={logo} alt="logo" />
    </div>
  );
};

export default Home;
