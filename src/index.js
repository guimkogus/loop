import React from "react";
import ReactDOM from "react-dom";
import Main from "./pages/main";
import { GlobalStyles } from "./config/global";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles>
      <Main />
    </GlobalStyles>
  </React.StrictMode>,
  document.getElementById("root")
);
