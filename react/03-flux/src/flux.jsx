import { Dispatcher } from "flux";
import { handleActions } from "./handleAction.jsx";

export const dispatcher = new Dispatcher();

dispatcher.register(handleActions.bind(handleActions));
