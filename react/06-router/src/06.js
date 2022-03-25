import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

//自定义路由
const MyRoute = props => {
  console.log(props);
  const { component: Component, ...rest } = props;
  return <Route {...rest} render={props => <Component {...props} />} />;
};

const App = () => (
  <BrowserRouter>
    <div>
      <Link to="/home">home</Link>
      <MyRoute path="/home" component={() => <h3>halo</h3>} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
