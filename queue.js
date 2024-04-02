class Queue{
   constructor(){
      this.items = []
   }

   enqueue(element){
      this.items.push(element)
   }

   dequeue(){
      return this.items.shift()
   }

   isEmpty(){
      return this.items.length === 0
   }

   peek(){
      if(!this.isEmpty()){
         return this.items[0]
      }
      return null
   }

   size(){
      return this.items.length
   }

   print(){
      console.log(this.items.toString());
   }
}

const queue = new Queue()
console.log(queue.isEmpty());
queue.enqueue(98)
queue.enqueue(23)
queue.enqueue(52)
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.peek());
queue.print()
console.log(queue.dequeue());
console.log(queue.size());
queue.print()