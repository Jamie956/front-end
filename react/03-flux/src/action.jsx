import { dispatcher } from "./flux.jsx";

export const add = text => {
  dispatcher.dispatch({ type: "ADD", text });
};