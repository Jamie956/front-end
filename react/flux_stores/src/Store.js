import { EventEmitter } from "events";

class Store extends EventEmitter {
  constructor(){
    super()
    this.tasks = [
      {
        id: 9456,
        text: "Home Work",
        complete: false
      },
      {
        id: 1256,
        text: "Play Game",
        complete: true
      }
    ];
  };
  
  get(){
    return this.tasks;
  };
}

const store = new Store;
export default store;