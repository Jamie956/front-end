import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Switch, Redirect, Route } from "react-router-dom";

//重定向
const App = () => (
  <BrowserRouter>
    <div>
      <Link to="/re">redirected to about</Link>
      <hr />
      <Switch>
        <Redirect from="/re" to="/about" />
        <Route path="/" exact render={() => <h1>home</h1>} />
        <Route path="/about" render={() => <h1>about</h1>} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
