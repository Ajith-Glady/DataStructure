// class Stack {
//    constructor(size) {
//       this.queue1 = [];
//       this.queue2 = [];
//       this.maxSize = size;
//    }

//    // Add an element to the stack
//    push(element) {
//       if (this.isFull()) {
//          console.log("Stack is full");
//          return;
//       }

//       // Add the new element to queue1
//       this.queue1.push(element);
//    }

//    // Remove and return the top element from the stack
//    pop() {
//       if (this.isEmpty()) {
//          console.log("Stack is empty");
//          return null;
//       }

//       // Move all elements from queue1 to queue2 except the last one
//       while (this.queue1.length > 1) {
//          this.queue2.push(this.queue1.shift());
//       }

//       // Pop the last element from queue1 (which is the top of the stack)
//       const poppedElement = this.queue1.shift();

//       // Swap the queues, so queue2 becomes queue1 for next operations
//       [this.queue1, this.queue2] = [this.queue2, this.queue1];

//       return poppedElement;
//    }

//    // Return the top element of the stack without removing it
//    peek() {
//       if (this.isEmpty()) {
//          console.log("Stack is empty");
//          return null;
//       }

//       // Move all elements from queue1 to queue2 except the last one
//       while (this.queue1.length > 1) {
//          this.queue2.push(this.queue1.shift());
//       }

//       // Peek the last element from queue1 (which is the top of the stack)
//       const topElement = this.queue1[0];

//       // Move the last element from queue1 to queue2
//       this.queue2.push(this.queue1.shift());

//       // Swap the queues, so queue2 becomes queue1 for next operations
//       [this.queue1, this.queue2] = [this.queue2, this.queue1];

//       return topElement;
//    }

//    // Check if the stack is empty
//    isEmpty() {
//       return this.queue1.length === 0;
//    }

//    // Check if the stack is full
//    isFull() {
//       return this.queue1.length + this.queue2.length === this.maxSize;
//    }
// }


class Stack {
   constructor(size){
      this.que1 = []
      this.que2 = []
      this.maxSize = size
   }

   push(value){
      if(this.isFull()){
         console.log('Stack is full');
         return
      }
      this.que1.push(value)
   }

   pop(){  
      if(this.isEmpty()){
         console.log('Stack is empty !!');
         return null
      }

      while(this.que1.length > 1){
         this.que2.push(this.que1.shift())
      }

      let deleteElement = this.que1.shift()

      let temp = this.que1;
      this.que1 = this.que2;
      this.que2 = temp;

      return deleteElement
   }

   peek(){
      if(this.isEmpty()){
         console.log('stack is empty');
         return null
      }

      while(this.que1.length > 1){
         this.que2.push(this.que1.shift())
      }
      let peekElement = this.que1[0]
      this.que2.push(this.que1.shift())
      let temp = this.que1;
      this.que1 = this.que2;
      this.que2 = temp;
      return peekElement
   }

   isFull(){
      return this.que1.length + this.que2.length === this.maxSize
   }

   isEmpty(){
      return this.que1.length === 0
   }
}


// Example usage
const stack = new Stack(5);

console.log("Is stack empty?", stack.isEmpty()); // Output: true

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log("Is stack full?", stack.isFull()); // Output: true

console.log("Top element:", stack.peek()); // Output: 5

console.log("Popped element:", stack.pop()); // Output: 5
console.log("Popped element:", stack.pop()); // Output: 5

console.log("Is stack full?", stack.isFull()); // Output: false
