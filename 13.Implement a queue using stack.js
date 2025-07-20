/* you can use this Class which is bundled together with your code

class Stack {
  push(element) { // add element to stack }
  peek() { // get the top element }
  pop() { // remove the top element}
  size() { // count of element }
}
*/

/* Array is disabled in your code */

// you need to complete the following Class
class Queue {
  constructor() {
    this.mainStack = new Stack();
    this.auxStack = new Stack();
  }
  enqueue(element) {
    // add new element to the rare
    // move all existing elements to aux stack
    while (this.mainStack.size()) {
      this.auxStack.push(this.mainStack.peek());
      this.mainStack.pop();
    }
    // add the new element to the main stack
    this.mainStack.push(element);
    // transfer elements from aux stack
    while (this.auxStack.size()) {
      this.mainStack.push(this.auxStack.peek());
      this.auxStack.pop();
    }
  }
  peek() {
    // get the head element
    return this.mainStack.peek();
  }
  size() {
    // return count of element
    return this.mainStack.size();
  }
  dequeue() {
    // remove the head element
    return this.mainStack.pop();
  }
}
