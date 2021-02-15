import { useCallback, useEffect, useState } from "react";
import { useCommand } from "../context/Context";
import alanBtn from "@alan-ai/alan-sdk-web";

const COMMANDS = {
  HOME_NEXT: "home-next",
  BACK_TO_HOME: "back-home",
  SHOW_COMMAND: "show-commands",
  HIDE_COMMAND: "hide-commands",
  GENRE_MOVIES: "show-genres",
  BACK: "back",
};

export default function useAlan() {
  //

  const {
    showCommand,
    showCommandHandler,
    homeNextClicked,
    setHomeNextClicked,
    handleHomeNext,
    setMovieType,
    backToHome,
    back,
  } = useCommand();

  const [alanInstance, setAlanInstance] = useState();

  //handle to show all alan commands
  const handleShowCommand = useCallback(() => {
    if (showCommand) {
      alanInstance.playText("Sorry but its already open");
    } else {
      alanInstance.playText("Opening commands");
      showCommandHandler();
    }
  }, [alanInstance, showCommandHandler, showCommand]);

  //handle to hide all alan commands
  const handleHideCommand = useCallback(() => {
    if (!showCommand) {
      alanInstance.playText("Sorry but its already close");
    } else {
      alanInstance.playText("Closing commands");
      showCommandHandler();
    }
  }, [alanInstance, showCommandHandler, showCommand]);

  //Handle next button click of home page
  const handleHomeNextButton = useCallback(() => {
    if (homeNextClicked) {
      alanInstance.playText(
        "Sorry, invalid command for this page. There is no next command exits"
      );
    } else {
      alanInstance.playText("Going next");
      handleHomeNext();
    }
  }, [alanInstance, handleHomeNext, homeNextClicked]);

  //direct to home page from any page
  const handleBackToHome = useCallback(() => {
    backToHome();
    setHomeNextClicked(false);
  }, [backToHome, setHomeNextClicked]);

  // call all genre movie list  apis
  const handleGenreMovie = useCallback(
    ({ detail: { genreName } }) => {
      console.log(genreName);
      if (genreName === "trendings") {
        setMovieType("fetchTrending");
      } else if (genreName === "top rated") {
        setMovieType("fetchTopRated");
      } else if (genreName === "Netflix") {
        setMovieType("fetchNetFlixOriginals");
      } else if (genreName === "comedy") {
        setMovieType("fetchComedyMovies");
      } else if (genreName === "horror") {
        setMovieType("fetchHorrorMovies");
      } else if (genreName === "romance" || genreName === "romantic") {
        setMovieType("fetchRomanceMovies");
      }

      alanInstance.playText("Here are the lists of your choice");
    },
    [setMovieType, alanInstance]
  );

  const handleBack = useCallback(() => {
    setHomeNextClicked(false);
    back();
  }, [back, setHomeNextClicked]);

  //
  //
  //
  //
  //
  //
  //
  useEffect(() => {
    window.addEventListener(COMMANDS.HOME_NEXT, handleHomeNextButton);
    window.addEventListener(COMMANDS.SHOW_COMMAND, handleShowCommand);
    window.addEventListener(COMMANDS.HIDE_COMMAND, handleHideCommand);
    window.addEventListener(COMMANDS.GENRE_MOVIES, handleGenreMovie);
    window.addEventListener(COMMANDS.BACK_TO_HOME, handleBackToHome);
    window.addEventListener(COMMANDS.BACK, handleBack);

    return () => {
      window.removeEventListener(COMMANDS.HOME_NEXT, handleHomeNextButton);
      window.removeEventListener(COMMANDS.SHOW_COMMAND, handleShowCommand);
      window.removeEventListener(COMMANDS.HIDE_COMMAND, handleHideCommand);
      window.removeEventListener(COMMANDS.GENRE_MOVIES, handleGenreMovie);
      window.removeEventListener(COMMANDS.BACK_TO_HOME, handleBackToHome);
      window.removeEventListener(COMMANDS.BACK, handleBack);
    };
    //
  }, [
    handleHomeNext,
    handleShowCommand,
    handleHideCommand,
    handleHomeNextButton,
    handleGenreMovie,
    handleBackToHome,
    handleBack,
  ]);

  useEffect(() => {
    if (alanInstance != null) return;
    setAlanInstance(
      alanBtn({
        key: process.env.REACT_APP_ALAN_KEY,
        onCommand: ({ command, payload }) => {
          window.dispatchEvent(new CustomEvent(command, { detail: payload }));
        },
      })
    );
  }, [alanInstance]);

  return null;
}
