class Node {
   constructor(data) {
      this.data = data;
      this.next = null;
   }
}

class Queue {
   constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
   }

   enqueue(element) {
      const newNode = new Node(element);
      if (this.isEmpty()) {
         this.head = newNode;
      } else {
         this.tail.next = newNode;
      }
      this.tail = newNode;
      this.size++;
   }

   dequeue() {
      if (this.isEmpty()) {
         return null;
      }
      const removedNode = this.head;
      this.head = this.head.next;
      if (!this.head) {
         this.tail = null;
      }
      this.size--;
      return removedNode.data;
   }

   isEmpty() {
      return this.size === 0;
   }

   peek() {
      return this.head ? this.head.data : null;
   }

   getSize() {
      return this.size;
   }

   print() {
      let current = this.head;
      const items = [];
      while (current) {
         items.push(current.data);
         current = current.next;
      }
      console.log(items.join(' '));
   }
}

// Example usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Queue elements:");
queue.print(); // Output: 1 2 3

console.log("Front element:", queue.peek()); // Output: 1

console.log("Dequeue:", queue.dequeue()); // Output: 1

console.log("Queue elements after dequeue:");
queue.print(); // Output: 2 3
