/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.queue = new Array(k)
  this.head;
  this.tail;
  return this;
};

/**
* Insert an element into the circular queue. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) {
    return false;
  }
  if (this.tail == undefined) {
    this.queue[0] = value;
    this.head = 0;
    this.tail = 0;
  } else if (this.tail+1 == this.queue.length) {
    this.queue[0] = value;
    this.tail = 0;
  } else {
    this.queue[this.tail + 1] = value;
    this.tail++;
  }
  return true;
};

/**
* Delete an element from the circular queue. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) {
    return false;
  }
  if (this.head+1 == this.queue.length) {
    this.queue[this.head] = undefined;
    this.head = 0;
  } else {
    this.queue[this.head] = undefined;
    this.head++;
  }
  if (this.isEmpty()) {
    this.head = undefined;
    this.tail = undefined;
  }
  return true;
};

/**
* Get the front item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Front = function () {
  return this.isEmpty() ? -1 : this.queue[this.head];
};

/**
* Get the last item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Rear = function () {
  return this.isEmpty() ? -1 : this.queue[this.tail];
};

/**
* Checks whether the circular queue is empty or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function () {
  for (e of this.queue) {
    if (e != undefined) {
      return false;
    }
  }
  return true;
};

/**
* Checks whether the circular queue is full or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function () {
  for (e of this.queue) {
    if (e === undefined) {
      return false;
    }
  }
  return true;
};

// let myCircularQueue = new MyCircularQueue(3);

// let isEmpty = myCircularQueue.isEmpty();
// let isFull = myCircularQueue.isFull();

// myCircularQueue.enQueue(1);
// myCircularQueue.enQueue(2);
// myCircularQueue.enQueue(3);
// isEmpty = myCircularQueue.isEmpty();
// isFull = myCircularQueue.isFull();

// myCircularQueue.deQueue();
// myCircularQueue.enQueue(4);
// myCircularQueue.deQueue();
// myCircularQueue.enQueue(5);
// myCircularQueue.deQueue();
// myCircularQueue.deQueue();
// myCircularQueue.deQueue();
// myCircularQueue.deQueue();


let myCircularQueue = new MyCircularQueue(3);
myCircularQueue.enQueue(1);
myCircularQueue.enQueue(2);
myCircularQueue.enQueue(3);
myCircularQueue.enQueue(4);
let rear = myCircularQueue.Rear();
