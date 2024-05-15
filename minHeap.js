class Heap {
   constructor(){
      this.Heap = []
   }

   getParentIndex(index){
      return Math.floor((index - 1)/2)
   }

   getLeftChildIndex(index){
      return 2 * index + 1
   }

   getRightChildIndex(index){
      return 2 * index + 2
   }

   swap(index1,index2){
      [this.Heap[index1],this.Heap[index2]] = [this.Heap[index2],this.Heap[index1]]
      // console.log('swap is done');
   }

   insert(value){

      this.Heap.push(value)
      this.heapifyUp()
      // console.log('value inserting is :',value);
   }

   heapifyUp(){
      let currentIndex = this.Heap.length - 1;
      while(currentIndex > 0){
         const parrentIndex = this.getParentIndex(currentIndex)
         if(this.Heap[parrentIndex] > this.Heap[currentIndex]){
            this.swap(parrentIndex,currentIndex)
            currentIndex = parrentIndex
         }else{
            break
         }
      }
   }

   getMin(){
      if(this.Heap.length === 0){
         return null
      }
      return this.Heap[0]
   }

   extractMin(){
      if(this.Heap.length === 0){
         return null
      }
      const min = this.Heap[0]
      this.Heap[0] = this.Heap.pop()
      this.heapifyDown()
      return min;
   }

   heapifyDown(){
      let currentIndex = 0
      while(true){
         const leftChildIndex = this.getLeftChildIndex(currentIndex)
         const rightChildIndex = this.getRightChildIndex(currentIndex)
         let smallerChildIndex = null

         if(leftChildIndex < this.Heap.length){
            smallerChildIndex = leftChildIndex
         }
         if(rightChildIndex < this.Heap.length && 
            this.Heap[rightChildIndex] < this.Heap[leftChildIndex]){
               smallerChildIndex = rightChildIndex
         }
         if(smallerChildIndex !== null && this.Heap[smallerChildIndex] < this.Heap[currentIndex]){
            this.swap(currentIndex , smallerChildIndex)
            currentIndex = smallerChildIndex
         }else{
            break
         }
      }
   }
   dis(){
      console.log(this.Heap);
   }
}


const heap = new Heap()
heap.insert(1)
heap.insert(10)
heap.insert(3)
heap.insert(2)
heap.insert(5)

console.log('min value :',heap.getMin());
// console.log('min value extracted :',heap.extractMin());
// console.log('new min value :',heap.getMin());
heap.dis()