import { combineReducers, createStore } from "redux";

const userReducer = (state = {}, action) => {
	switch (action.type) {
		case "SET_NAME": {
			return { ...state, name: action.payload };
			break;
		}
		case "SET_AGE": {
			return { ...state, age: action.payload };
			break;
		}
	}
	return state;
}

const itemReducer = (state = [], action) => {
	switch (action.type) {
		case "ADD_ITEM": {
			return state.concat({
				id: Date.now(),
				text: action.payload,
			});
			break;
		}
	}
	return state;
}

const reducers = combineReducers({
	user: userReducer,
	item: itemReducer
})

const store = createStore(reducers)

store.subscribe(() => {
	console.log(store.getState());
})

store.dispatch({ type: "SET_NAME", payload: "Jamie" })
store.dispatch({ type: "SET_AGE", payload: 18 })

store.dispatch({ type: "ADD_ITEM", payload: 'Foo' })
store.dispatch({ type: "ADD_ITEM", payload: 'Bar' })