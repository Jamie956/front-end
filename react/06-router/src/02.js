import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

//路由渲染
const App = () => (
  <BrowserRouter>
    <Route exact path="/" render={() => <h3>halo</h3>} />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
