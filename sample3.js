class Node{
   constructor(value){
      this.value = value
      this.next = null
      this.previous = null
   }
}

class linkedList {
   constructor(){
      this.head = null
      this.size = 0
   }

   addNode(value){
      
      const node = new Node(value)
      if(this.head === null){
         this.head = node
      }else{
         let current = this.head
         while(current){
            if(current.value === value){
               let next = current.next
               next.previous = node
               node.next = current.next

               node.previous = current
               current.next = node
            }
            current = current.next
         }
      }
      this.size++
   }


}