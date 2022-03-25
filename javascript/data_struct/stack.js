/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    return this;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  let min = this.top();
  this.stack.forEach(e => {
    if(e < min){
      min = e;
    }
  });
  return min;
};

var obj = new MinStack();
obj.push(1);
obj.push(2);
obj.push(3);
console.log(obj);
obj.pop();
console.log(obj);

var top = obj.top();
console.log(top);

obj.push(-2);
obj.push(-3);
var min = obj.getMin();
console.log(obj);
console.log(min);
