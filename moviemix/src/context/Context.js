import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "../axios/Axios";
import fetchURL from "../axios/requests";

const Alancontext = React.createContext();

export function useCommand() {
  return useContext(Alancontext);
}

function ContextApi(props) {
  const [showCommand, setShowCommand] = useState(false);
  const [homeNextClicked, setHomeNextClicked] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movieType, setMovieType] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (movieType === "Trending") {
        const request = await axios.get(fetchURL.fetchTrending);
        console.log("fetchTrending");
        setMovies(request.data.results);
        props.history.push("/trending-movies");
        setMovieType("");
        return request;
      } else if (movieType === "TopRated") {
        const request = await axios.get(fetchURL.fetchTopRated);
        console.log("fetchTopRated");
        setMovies(request.data.results);
        props.history.push("/top-rated-movies");
        setMovieType("");
        return request;
      } else if (movieType === "NetFlixOriginals") {
        const request = await axios.get(fetchURL.fetchNetFlixOriginals);
        console.log("fetchNetFlixOriginals");
        setMovies(request.data.results);
        props.history.push("/netflix-originals-movies");
        setMovieType("");
        return request;
      } else if (movieType === "ComedyMovies") {
        const request = await axios.get(fetchURL.fetchComedyMovies);
        console.log("fetchComedyMovies");
        setMovies(request.data.results);
        props.history.push("/comedy-movies");
        setMovieType("");
        return request;
      } else if (movieType === "HorrorMovies") {
        const request = await axios.get(fetchURL.fetchHorrorMovies);
        console.log("fetchHorrorMovies");
        setMovies(request.data.results);
        props.history.push("/horror-movies");
        setMovieType("");
        return request;
      } else if (movieType === "RomanceMovies") {
        const request = await axios.get(fetchURL.fetchRomanceMovies);
        console.log("fetchRomanceMovies");
        setMovies(request.data.results);
        props.history.push("/romantic-movies");
        setMovieType("");
        return request;
      }
    }
    fetchData();
  }, [movieType, props.history]);

  function showCommandHandler() {
    setShowCommand(!showCommand);
  }

  const handleHomeNext = () => {
    setHomeNextClicked(true);
    props.history.push("/genres-list");
  };

  const backToHome = () => {
    props.history.push("/");
  };

  const back = () => {
    props.history.goBack();
  };

  const forward = () => {
    console.log(props.history);
    props.history.goForward();
  };

  const values = {
    showCommand,
    setShowCommand,
    homeNextClicked,
    setHomeNextClicked,
    setMovieType,
    movies,
    showCommandHandler: showCommandHandler,
    handleHomeNext: handleHomeNext,
    backToHome: backToHome,
    back: back,
    forward: forward,
  };

  return (
    <Alancontext.Provider value={values}>{props.children}</Alancontext.Provider>
  );
}

export default withRouter(ContextApi);
