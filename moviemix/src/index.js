import React from "react";
import ReactDOM from "react-dom";
import ContextApi from "./context/Context";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <ContextApi>
      <App />
    </ContextApi>
  </BrowserRouter>,
  document.getElementById("root")
);
