class Queue{
   constructor(){
      this.items = {}
      this.rear = 0
      this.front = 0
   }

   enqueue(element){
      this.items[this.rear] = element
      this.rear++
   }

   dequeue(){
      const item = this.items[this.front]
      delete this.items[this.front]
      this.front++
      return item
   }

   isEmpty(){
      return this.rear - this.front === 0
   }

   size(){
      return this.rear - this.front
   }

   peek(){
      return this.items[this.front]
   }

   print(){
      console.log(this.items);
   }
}

const queue = new Queue
console.log(queue.isEmpty());
queue.enqueue(23)
queue.enqueue(42)
queue.enqueue(51)
queue.enqueue(66)
console.log(queue.isEmpty());
console.log(queue.peek());
console.log(queue.size());
queue.print()