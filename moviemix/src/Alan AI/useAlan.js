import { useCallback, useEffect, useState } from "react";
import { useCommand } from "../context/Context";
import alanBtn from "@alan-ai/alan-sdk-web";

const COMMANDS = {
  HOME_NEXT: "home-next",
  SHOW_COMMAND: "show-commands",
  HIDE_COMMAND: "hide-commands",
};

export default function useAlan() {
  //

  const {
    showCommand,
    showCommandHandler,
    homeNextClicked,
    handleHomeNext,
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

    return () => {
      window.removeEventListener(COMMANDS.HOME_NEXT, handleHomeNextButton);
      window.removeEventListener(COMMANDS.SHOW_COMMAND, handleShowCommand);
      window.removeEventListener(COMMANDS.HIDE_COMMAND, handleHideCommand);
    };
    //
  }, [handleHomeNext, handleShowCommand, handleHideCommand]);

  useEffect(() => {
    if (alanInstance != null) return;
    setAlanInstance(
      alanBtn({
        key: process.env.REACT_APP_ALAN_KEY,
        onCommand: ({ command }) => {
          window.dispatchEvent(new CustomEvent(command));
        },
      })
    );
  }, [alanInstance]);

  return null;
}
