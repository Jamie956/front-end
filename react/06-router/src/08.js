import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

//不匹配
const App = () => (
  <BrowserRouter>
    <div>
      <Link to="/xx">no match</Link>
      <hr />
      <Switch>
        <Route path="/" exact render={() => <h1>home</h1>} />
        <Route render={() => <h1>No match</h1>} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
