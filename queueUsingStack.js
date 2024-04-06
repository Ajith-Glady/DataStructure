// class Queue{
//    constructor(){
//       this.stack1 = []
//       this.stack2 = []
//    }

//    enqueue(value){
//       this.stack1.push(value)
//    }

//    dequeue(){
//       if(this.stack2.length === 0){
//          while(this.stack1.length > 0){
//             this.stack2.push(this.stack1.pop())
//          }
//       }
//       return this.stack2.pop() || null
//    }

//    front(){
//       if(this.stack2.length === 0){
//          while(this.stack1.length > 0){
//             this.stack2.push(this.stack1.pop())
//          }
//       }
//       return this.stack2[this.stack2.length-1] || null
//    }

//    isEmpty(){
//       return this.stack1.length === 0 && this.stack2.length === 0
//    }

//    size(){
//       return this.stack1.length + this.stack2.length
//    }

//    clear(){
//       this.stack1 = []
//       this.stack2 = []
//    }
// }


class Queue {
   constructor() {
      this.stack1 = []
      this.stack2 = []
   }

   enqueue(value) {
      this.stack1.push(value)
   }

   dequeue() {
      if (this.stack2.length === 0) {
         while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop())
         }
      }
      return this.stack2.pop()
   }

   front(){
      if(this.stack2.length === 0){
         while(this.stack1.length > 0){
            this.stack2.push(this.stack1.pop())
         }
      }
      return this.stack2[this.stack2.length-1]
   }

   isEmpty(){
      return this.stack1.length === 0 && this.stack2.length === 0
   }

   size(){
      return this.stack1.length + this.stack2.length
   }
   
}



const queue = new Queue()
console.log(queue.size());
console.log(queue.isEmpty());
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
console.log('front :', queue.front());
console.log('pop :', queue.dequeue());
console.log('front :', queue.front());