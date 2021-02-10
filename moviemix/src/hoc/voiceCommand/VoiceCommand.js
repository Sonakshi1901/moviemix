import React, { useState } from "react";
import "./VoiceCommand.css";
import { useCommand } from "../../context/Context";
import Button from "../../components/utility/buttons/Button";
import command from "./command.js";

const VoiceCommand = (props) => {
  const { showCommand, showCommandHandler } = useCommand();

  return (
    <div className="voiceCommand">
      <div className="voiceCommand_btn">
        <Button handleButtonClick={showCommandHandler} name="Commands" />
      </div>
      <div className={`voiceCommand_box ${showCommand ? "visible" : null} `}>
        HELLO WORLD
      </div>
      {props.children}
    </div>
  );
};

export default VoiceCommand;
