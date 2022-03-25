import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Main from "./components/Main5.jsx";

ReactDOM.render(
  <MuiThemeProvider>
    <Main />
  </MuiThemeProvider>,
  document.getElementById("root")
);
