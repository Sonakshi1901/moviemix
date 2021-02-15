import React from "react";
import { useCommand } from "../../context/Context";
import logo from "../../images/logo/MovieMix4.png";
import "./Home.css";
import Button from "../utility/buttons/Button";

const Home = (props) => {
  const { handleHomeNext } = useCommand();

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
