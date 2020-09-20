import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import { createGlobalStyle } from "styled-components";
import "normalize.css";

import { App } from "./App";

WebFont.load({
  google: {
    families: ["Roboto:400,600,700,800"],
  },
});

const GlobalStyle = createGlobalStyle`
    * {
      outline: none;
      box-sizing: border-box;
      font-family: Roboto, sans;
    }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
