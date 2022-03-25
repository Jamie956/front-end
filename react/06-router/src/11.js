import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Switch,
  BrowserRouter,
  Route,
  Link,
  withRouter
} from "react-router-dom";

const Home = withRouter(props => {
  console.log(props);
  return (
    <div>
      is Home
      <button onClick={() => props.history.push("/about")}>about</button>
    </div>
  );
});

const routesCoonfig = [
  {
    path: "/home",
    component: Home
  }
];

const GenetateRoutes = route => (
  <Route
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);

const App = () => (
  <BrowserRouter>
    <div>
      <Link to="/home">home</Link>
      <hr />
      <Switch>
        {routesCoonfig.map((route, i) => <GenetateRoutes key={i} {...route} />)}
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
