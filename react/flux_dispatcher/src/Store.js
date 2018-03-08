import Dispatcher from "./Dispatcher";

class Store {
  handleActions(action) {
    console.log(action);
    switch(action.type) {
      case "CREATE": {
        console.log(action.text);
        break;
      }
    }
  }
}

const store = new Store;
Dispatcher.register(store.handleActions.bind(store));
export default store;