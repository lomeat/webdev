import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import { createGlobalStyle } from "styled-components";

import { App } from "./App";

const GlobalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
  }
`;

WebFont.load({
  google: {
    families: ["Roboto"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
