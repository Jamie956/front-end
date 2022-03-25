import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route } from "react-router-dom";

//子路由
const Parent = ({ routes }) => (
  <div>
    <Link to="/parent/child1">child1</Link> |
    <Link to="/parent/child2">child2</Link>
    {routes.map((route, i) => <GenetateRoutes key={i} {...route} />)}
  </div>
);

const GenetateRoutes = route => {
  return (
    <Route
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
};

const routes = [
  {
    path: "/home",
    component: () => <h2>home</h2>
  },
  {
    path: "/parent",
    component: Parent,
    routes: [
      {
        path: "/parent/child1",
        component: () => <h3>child1</h3>
      },
      {
        path: "/parent/child2",
        component: () => <h3>child2</h3>
      }
    ]
  }
];

const App = () => (
  <BrowserRouter>
    <div>
      <Link to="/parent">parent</Link> |
      <Link to="/home">home</Link>
      {routes.map((route, i) => <GenetateRoutes key={i} {...route} />)}
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
