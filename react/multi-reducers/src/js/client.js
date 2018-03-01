import { combineReducers, createStore } from "redux";

const userReducer = (state={}, action) => {
  switch(action.type) {
    case "SET_NAME": {
        return {...state, name: action.payload};
        break;
    }
    case "SET_AGE": {
        return {...state, age: action.payload};
        break;
    }
  }
  return state;
}

const tweetsReducer = (state=[], action) => {
  switch(action.type) {
    case "ADD_TWEET": {
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
    tweets: tweetsReducer
})

const store = createStore(reducers)

store.subscribe(() => {
    console.log("store changed", store.getState());
})

store.dispatch({type: "", payload: "1"})
store.dispatch({type: "SET_NAME", payload: "Will"})
store.dispatch({type: "SET_AGE", payload: 35})
store.dispatch({type: "SET_AGE", payload: 34})

store.dispatch({type: "ADD_TWEET", payload: "OMG LIKE LOL"})
store.dispatch({type: "ADD_TWEET", payload: "I am so like seriously like totally like right now"})