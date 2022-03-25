import React, { Component } from "react";
import Loadable from "react-loadable";
import Loading from "./components/Loading";

//加载组件和数据
export default Loadable.Map({
  loader: {
    Home: () => import("./components/Home"),
    data: () =>
      fetch(
        "https://api.github.com/search/repositories?q=stars:>1+language:java&sort=stars&order=desc&type=Repositories"
      ).then(res => res.json())
  },
  loading: Loading,

  render(loaded, props) {
    let Home = loaded.Home.default;
    let data = loaded.data;
    return <Home {...props} data={data} />;
  }
});
