import React from "react";
import ReactDOM from "react-dom";
import App from "../shared/App";
import Loadable from "react-loadable";
import { BrowserRouter as Router } from "react-router-dom";

Loadable.preloadReady().then(() => {
  ReactDOM.hydrate(
    <Router>
      <App />
    </Router>,
    document.getElementById("root")
  );
});
