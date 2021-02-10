import React from "react";
import ReactDOM from "react-dom";
import ContextApi from "./context/Context";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ContextApi>
      <App />
    </ContextApi>
  </React.StrictMode>,

  document.getElementById("root")
);
