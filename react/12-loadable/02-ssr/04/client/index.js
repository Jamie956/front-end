import React from "react";
import ReactDOM from "react-dom";
import App from "../shared/App";
import Loadable from "react-loadable";

Loadable.preloadReady().then(() => {
  ReactDOM.hydrate(<App />, document.getElementById("root"));
});
