import React, { useContext, useState } from "react";

const Alancontext = React.createContext();

export function useCommand() {
  return useContext(Alancontext);
}

function ContextApi({ children }) {
  const [showCommand, setShowCommand] = useState(false);
  const [homeNextClicked, setHomeNextClicked] = useState(false);

  function showCommandHandler() {
    setShowCommand(!showCommand);
  }

  const handleHomeNext = () => {
    setHomeNextClicked(true);
  };

  const values = {
    showCommand,
    setShowCommand,
    homeNextClicked,
    setHomeNextClicked,
    showCommandHandler: showCommandHandler,
    handleHomeNext: handleHomeNext,
  };

  return <Alancontext.Provider value={values}>{children}</Alancontext.Provider>;
}

export default ContextApi;
