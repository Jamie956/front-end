import { createStore } from "redux";

const reduer = function (state, action) {
	if (action.type === 'GREET') {
		return action.text;
	}
}

const store = createStore(reduer, 0);

store.subscribe(() => {
	console.log(store.getState());
})

store.dispatch({ type: "GREET", text: 'Hello World.' });