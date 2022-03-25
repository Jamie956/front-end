import React, { Component } from "react";
import Loadable from "react-loadable";

const Home = Loadable({
  loading: <div>Loading</div>,
  loader: () => import(/* webpackChunkName: 'home' */ "./Home"),
  modules: ["./Home"],//定义组件名,在server side通过Loadable.Capture获取
  webpack: () => [require.resolveWeak("./Home")]
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
