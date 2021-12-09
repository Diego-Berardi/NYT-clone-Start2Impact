import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/scss/index.scss";
import { AppProvider } from "./context";

// require for dotenv
require("dotenv").config();


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
