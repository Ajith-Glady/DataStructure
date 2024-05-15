class Heap{
   constructor(){
      this.heap = []
   }
   getParentIndex(childIndex){
      return Math.floor((childIndex - 1) / 2)
   }
   getParent(childIndex){
      return this.heap[this.getParentIndex(childIndex)]
   }
   hasParent(childIndex){
      return (this.getParentIndex(childIndex) >= 0)
   }

   getLeftChildIndex(parentIndex){
      return (parentIndex * 2) + 1
   }
   getLeftChild(parentIndex){
      return (this.heap[this.getLeftChildIndex(parentIndex)])
   }
   hasLeftChild(parentIndex){
      return this.getLeftChildIndex(parentIndex) < this.heap.length
   }

   getRightChildIndex(parentIndex){
      return (parentIndex * 2) + 2
   }
   getRightChild(parentIndex){
      return this.heap[this.getRightChildIndex(parentIndex)]
   }
   hasRightChild(parentIndex){
      return this.getRightChildIndex(parentIndex) < this.heap.length
   }

   swap(index1,index2){
      let temp = this.heap[index1]
      this.heap[index1] = this.heap[index2]
      this.heap[index2] = temp
   }

   peek(){
      if(this.heap.length === 0){
         return null
      }
      return this.heap[0]
   }

   heapifyUp(){
      let index = this.heap.length - 1
      while(this.hasParent(index) && this.getParent(index) > this.heap[index]){
         this.swap(this.getParentIndex(index),index)
         index = this.getParentIndex(index)
      }
   }

   addNewElement(value){
      this.heap.push(value)
      this.heapifyUp()
   }

   heapifyDown(){
      let index = 0
      while(this.hasLeftChild(index)){
         let smallerChildIndex = this.getLeftChildIndex(index)
         if(this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)){
            smallerChildIndex = this.getRightChildIndex(index)
         }
         if(this.heap[index] < this.heap[smallerChildIndex]){
            break
         }else{
            this.swap(index,smallerChildIndex)
         }
         index = smallerChildIndex
      }
   }

   remove(){
      if(this.heap.length === 0){
         return null
      }
      let value = this.heap[0]
      this.heap[0] = this.heap[this.heap.length - 1]
      this.heap.pop()
      this.heapifyDown()

      return value
   }

   display(){
      console.log(this.heap);
   }
}
function heapsort(arr){
   const heap=new Heap()
   for(let i=0;i<arr.length;i++){
      heap.addNewElement(arr[i])
   }
   let sortar=[]
   while (heap.heap.length>0) {
      sortar.push(heap.remove())
   }
   return sortar
}
// let arr=[43,5,63,61,78,9]
// console.log(heapsort(arr));
const heap = new Heap()
heap.addNewElement(3)
heap.addNewElement(8)
heap.addNewElement(83)
heap.addNewElement(1)
heap.display()
// console.log(heap.peek());
// console.log(heap.remove());
// console.log(heap.remove());