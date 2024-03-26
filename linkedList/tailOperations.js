class Node{
   constructor(value){
      value : value
      next : null
   }
}

class linkedList{
   constructor(){
      this.head = null
      this.tail = null
      this.size = 0
   }

   isEmpty(){
      return this.size === 0
   }

   getSize(){
      return this.size
   }

   prepend(value){
      const node = new Node(value)
      if(this.isEmpty()){
         this.head = node
         this.tail = node
      }else{
         node.next = this.head
         this.head = node
      }
      this.size++
   }

   append(value){
      const node = new Node(value)
      if(this.isEmpty()){
         this.head = node
         this.tail = node
      }else{
         this.tail.next = node
         this.tail = node
      }
      this.size++
   }

   removeFromFront(){
      if(this.isEmpty()){
         return null
      }
      let value = this.head.value
      this.head = this.head.next
      this.size--
      return value
   }

   removeFromEnd(){
      if(this.isEmpty()){
         return null
      }l
   }


}

const list = new linkedList()

console.log(list.isEmpty());
console.log(list.getSize());