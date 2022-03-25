import React, { Component } from "react";
import Loadable from "react-loadable";
import Loading from "./components/Loading";

//按需加载
const Home = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ "./components/Home"),
  loading: Loading,
  delay: 300, // 0.3 seconds
  timeout: 10000 // 10 seconds
});

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
