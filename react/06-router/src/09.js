import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route } from "react-router-dom";

//config
const routes1 = [
  {
    path: "/",
    exact: true,
    main: () => <h2>home</h2>
  },
  {
    path: "/doc",
    main: () => <h2>doc</h2>
  },
  {
    path: "/about",
    main: () => <h2>about</h2>
  }
];

const App = () => (
  <BrowserRouter>
    <div>
      <Link to="/">home</Link> |
      <Link to="/doc">doc</Link> |
      <Link to="/about">about</Link>
      <hr />
      {routes1.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
