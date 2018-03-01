import { EventEmitter } from "events";

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = [
      {
        id: 113464613,
        text: "Go Shopping",
        complete: false
      },
      {
        id: 235684679,
        text: "Pay Water Bill",
        complete: true
      },
    ];
  }
  getAll() {
    return this.todos;
  }
}

const todoStore = new TodoStore;
export default todoStore;