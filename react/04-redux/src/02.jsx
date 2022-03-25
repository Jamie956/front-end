import { combineReducers, createStore } from "redux";

//user储存对象
const user = (state = {}, action) => {
  switch (action.type) {
    case "SET_NAME": {
      return { ...state, name: action.payload };
    }
    case "SET_AGE": {
      return { ...state, age: action.payload };
    }
  }
  return state;
};

//item储存对象(数组)
const item = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      return state.concat({
        id: Date.now(),
        text: action.payload
      });
    }
  }
  return state;
};

//定义根reducer,关联多个储存对象
const rootReducer = combineReducers({ user, item });

//关联根reducer
const store = createStore(rootReducer);

//监听dispatch,调用时触发
store.subscribe(() => console.log("Update"));

//action,根据类型操作储存对象
store.dispatch({ type: "SET_NAME", payload: "Jamie" });
store.dispatch({ type: "SET_AGE", payload: 18 });

store.dispatch({ type: "ADD_ITEM", payload: "FOO" });
store.dispatch({ type: "ADD_ITEM", payload: "BAR" });

//获取当前state
console.log(store.getState());
