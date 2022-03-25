import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

//获取父路由信息
const Home = props => {
  console.log(props);
  return <div>halo</div>;
};
const App = () => (
  <BrowserRouter>
    <Route path="/" component={Home} />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
