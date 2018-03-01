import { createStore } from "redux";

const reduer = function(state, action){
    if(action.type === "INC"){
        return state + action.payload;
    }
    if(action.type === "DEC"){
        return state - action.payload;
    }
    return state;
}

const store = createStore(reduer, 0);

store.subscribe(() => {
    console.log("store changed", store.getState());
})

store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 2});
store.dispatch({type: "INC", payload: 22});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "DEC", payload: 1000});
