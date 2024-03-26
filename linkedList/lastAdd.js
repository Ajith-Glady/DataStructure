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

list.append(5)
list.append(15)

console.log(list.print());