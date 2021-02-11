import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

const Alancontext = React.createContext();

export function useCommand() {
  return useContext(Alancontext);
}

function ContextApi(props) {
  const [showCommand, setShowCommand] = useState(false);
  const [homeNextClicked, setHomeNextClicked] = useState(false);

  useEffect(() => {
    // console.log(props);
  }, [props]);

  function showCommandHandler() {
    setShowCommand(!showCommand);
  }

  const handleHomeNext = () => {
    setHomeNextClicked(true);
    props.history.push("/genres-list");
  };

  const values = {
    showCommand,
    setShowCommand,
    homeNextClicked,
    setHomeNextClicked,
    showCommandHandler: showCommandHandler,
    handleHomeNext: handleHomeNext,
  };

  return (
    <Alancontext.Provider value={values}>{props.children}</Alancontext.Provider>
  );
}

export default withRouter(ContextApi);
