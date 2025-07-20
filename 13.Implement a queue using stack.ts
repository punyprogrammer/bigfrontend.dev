




/* you can use this Class which is bundled together with your code */

declare class Stack {
  push(element: any): void
  peek(): any
  pop(): any
  size(): number
}

/* Array is disabled in your code */

// you need to complete the following Class
class Queue {
  mainStack = new Stack();
  auxStack = new Stack();
  enqueue(element: any) { 
    // add new element to the rare
    // shift all the elements from main stack to aux stack
    while(this.mainStack.size() > 0){
      const topElement = this.mainStack.peek();
      this.mainStack.pop();
      this.auxStack.push(topElement);
    }
    // enqueue the element to the main stack 
    this.mainStack.push(element);
    // shift all the elements from aux stack to main stack 
    while(this.auxStack.size() > 0 ){
      const topElement = this.auxStack.peek();
      this.auxStack.pop();
      this.mainStack.push(topElement);
    }
    return this.mainStack.peek();
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
    const res = this.mainStack.peek();
    this.mainStack.pop();
    return res;
  }
}
