import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";
import rootReducer from "./reducers";

//关联根reducer
const store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()));

//Provider提供局部store
class Appx extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Appx;
