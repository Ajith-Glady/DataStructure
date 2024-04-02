class Node{
   constructor(value){
      this.value = value
      this.next = null
   }
}

class stackList{
   constructor(){
      this.head = null
      this.size = 0
   }

   isEmpty(){
      return this.size == 0
   }
   sizeFind(){
      return this.size
   }

   push(value){
      const node = new Node(value)
      if(this.size == 0){
         this.head = node
      }else{
         node.next = this.head
         this.head = node
      }
      this.size++
   }

   pop(){
      let item
      if(this.size == 0){
         return null
      }else{
         this.head = this.head.next
         this.size--
         item = this.head.value
      }
      return item
   }

   peek(){
      return this.head.value
   }

   reverse(){
      const tempStack = new stackList()
      let current = this.head
      while(current){
         tempStack.push(current.value)
         current = current.next
      }
      tempStack.print()
   }

   sort(){
      let current = this.head
      while(current){
         let check = current.next
         while(check){
            if(current.value > check.value){
               let temp = current.value
               current.value = check.value
               check.value = temp
            }
            check = check.next
         }
         current = current.next
      }

   }

   print(){
      if(this.size === 0){
         return null
      }else{
         let values = []
         let current = this.head
         while(current != null){
            values.push(current.value)
            current = current.next
         }
         console.log(values);
      }
   }
}

const list = new stackList()
// console.log(list.isEmpty());
// console.log(list.sizeFind());
list.push(38)
list.push(23)
list.push(92)
// console.log(list.sizeFind());
// console.log(list.pop());
// console.log(list.peek());
list.push(99)
list.push(83)
list.print()
// list.reverse()
list.sort()
list.print()