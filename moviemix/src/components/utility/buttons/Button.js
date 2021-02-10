import React from "react";
import "./Button.css";

function Button(props){
  return (
    <div className="button">
    <button>{props.name}</button>
    </div>
  );
}
export default Button;
