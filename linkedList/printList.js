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

   // Printing the values in the liked list 

   print(){
      if(this.isEmpty()){
         console.log("Empty linked list");
      }else{
         let current = this.head
         let listValue = ''
         while(current){
            listValue =listValue + `${current.value} `
            current = current.next
         }
         console.log(listValue);
      }
   }
}

const list = new linkedList()


console.log('is the list is empty? :',list.isEmpty());
console.log(list.print());
list.prepend(10)
console.log(list.print());
list.prepend(20)
list.prepend(30)
console.log(list.print());