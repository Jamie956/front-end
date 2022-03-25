import { createStore } from "redux";

//store,储存对象
const Counter = (state = 0, action) => {
  if (typeof state === "undefined") {
    return 0;
  }
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

//createStore,关联储存对象
const counterStore = createStore(Counter);

//监听dispatch,调用时触发
counterStore.subscribe(() => console.log("Update"));

//action,根据类型操作储存对象
counterStore.dispatch({ type: "INCREMENT" });
counterStore.dispatch({ type: "INCREMENT" });
counterStore.dispatch({ type: "DECREMENT" });

//获取当前state
console.log(counterStore.getState());
