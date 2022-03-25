/**
 * Pseudocode
 * 
 * construct(){
 *  queue is array
 *  head pointer init -1
 *  tail pointer init -1
 * }
 * 
 * enqueue(value){
 *  queue must not full
 *  head = 0 if queue empty
 *  tail next pointer to (tail+1)%size
 *  store value to queue
 * }
 * 
 * dequeue(){
 *  queue must not empty
 *  init head and tail if value is the last
 *  head next pointer to (head+1)%size
 * }
 * 
 * front(){
 *  queue must not empty
 *  queue[head]
 * }
 * 
 * rear(){
 *  queue must not empty
 *  queue[tail]
 * }
 * 
 * isEmpty(){
 *  head == -1
 * }
 * 
 * isFull(){
 *  tail next pointer == head
 * }
 */


/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.queue = new Array(k);
  this.head = -1;
  this.tail = -1;
  this.size = k;
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
  if(this.isEmpty()){
    this.head = 0;
  }
  this.tail = (this.tail + 1) % this.size;
  this.queue[this.tail] = value;
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
  if (this.head == this.tail) {
    this.head = -1;
    this.tail = -1;
    return true;
  }
  this.head = (this.head + 1) % this.size;
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
  return this.head == -1;
};

/**
* Checks whether the circular queue is full or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function () {
  return ((this.tail + 1) % this.size) == this.head;
};

let myCircularQueue = new MyCircularQueue(3);
myCircularQueue.enQueue(1);
myCircularQueue.enQueue(2);
myCircularQueue.enQueue(3);
