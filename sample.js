class Node{
   constructor(value){
      this.value = value
      this.next = null
   }
}

class linkedList {
   constructor(){
      this.head = null
      this.size = 0
   }

   isEmpty(){
      return this.size === 0
   }

   getSize(){
      return this.size
   }


   // Adding value at the first of a linked list

   prepend(value){
      const node = new Node(value)
      if(this.isEmpty()){
         this.head = node
      }else{
         node.next = this.head
         this.head = node
      }
      this.size++
   }



   // Adding value at the end of the linked list

   append(value){
      const node = new Node(value)
      if(this.isEmpty()){
         this.head = node
      }else{
         let previous = this.head
         while(previous.next){
            previous = previous.next
         }
         previous.next = node
      }
      this.size++
   }


   // Adding new node in a specific index

   addBetween(value,index){
      if(index < 0 || index > this.size){
         return
      }else if(index == 0 ){
         this.prepend(value)
      }else{
         const node = new Node(value)
         let previous = this.head
         for(let i=0 ; i<index-1 ; i++){
            previous = previous.next
         }
         node.next = previous.next
         previous.next = node
         this.size++
      }
   }


   // Remove node form list

   deleteNode(index){
      if(index < 0 || index > this.size){
         return
      }
      let removeNode
      if(index === 0){
         removeNode = this.head
         this.head = this.head.next
      }else{
         let previous = this.head
         for(let i=0 ; i<index-1 ; i++){
            previous = previous.next
         }
         removeNode = previous.next
         previous.next = removeNode.next
      }
      this.size--
      return removeNode.value
   }

   
   // Delete by value

   deleteValue(value){
      if(this.isEmpty()){
         return null
      }
      if(this.head.value === value){
         this.head = this.head.next
         this.size--
         return value
      }else{
         let previous = this.head
         for(let i=0 ; i<this.size-1 ; i++){
            if(previous.next.value == value) {
               previous.next = previous.next.next
               this.size--
               return value
            }
            previous = previous.next
         }
      }
   }


   // Search by value

   search(value){
      if(this.isEmpty()){
         return -1
      }else{
         let current = this.head
         for(let i=0 ; i<this.size ; i++){
            if(current.value === value){
               return i
            }
            current = current.next
         }
         return -1
      }
   }



   // Reverse the linked list

   reverse(){
      let previous = null
      let current = this.head
      
      while(current){
         let next = current.next
         current.next = previous
         previous = current
         current = next
      } 
      this.head = previous
      return 1
   }



   // Printing the values in the liked list 

   print(){
      if(this.isEmpty()){
         console.log("Empty linked list");
      }else{
         let current = this.head
         let listValue = ''
         while(current){
            listValue = listValue + `${current.value} `
            current = current.next
         }
         console.log(listValue);
      }
   }
}

const list = new linkedList()


console.log('is the list is empty? :',list.isEmpty());
list.print()
list.prepend(10)
list.print()
list.prepend(20)
list.prepend(30)
list.print()

list.append(5)
list.append(15)

list.print()

list.addBetween(100,2)

list.print()

console.log(list.reverse());
list.print()