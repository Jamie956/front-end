import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from "./style.scss";

class App extends Component {
  constructor() {
    super();
    console.log(style);
  }
  render() {
    return (
      <div>
        <div className={style.header}>
          header
          <a href="#">welcome</a>
        </div>

        <div className={style.main}>
          <div className={style.menu}>menu</div>
          <div className={style.content}>content</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
