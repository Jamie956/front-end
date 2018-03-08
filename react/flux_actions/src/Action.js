import Dispatcher from "./Dispatcher";

export function create(text) {
  Dispatcher.dispatch({ type: "CREATE", text });
}