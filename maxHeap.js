class MaxHeap {
   constructor() {
       this.heap = [];
   }

   buildHeap(arr) {
       this.heap = [...arr];
       for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
           this.heapifyDown(i);
       }
   }

   insert(value) {
       this.heap.push(value);
       this.heapifyUp(this.heap.length - 1);
   }

   removeMax() {
       if (this.heap.length === 0) {
           return null;
       }

       const maxValue = this.heap[0];
       this.heap[0] = this.heap.pop();
       this.heapifyDown(0);

       return maxValue;
   }

   heapifyUp(index) {
       let currentIndex = index;
       while (currentIndex > 0) {
           const parentIndex = Math.floor((currentIndex - 1) / 2);
           if (this.heap[parentIndex] < this.heap[currentIndex]) {
               [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
               currentIndex = parentIndex;
           } else {
               break;
           }
       }
   }

   heapifyDown(index) {
       let currentIndex = index;
       while (true) {
           let maxChildIndex = currentIndex;
           const leftChildIndex = 2 * currentIndex + 1;
           const rightChildIndex = 2 * currentIndex + 2;

           if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[maxChildIndex]) {
               maxChildIndex = leftChildIndex;
           }

           if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[maxChildIndex]) {
               maxChildIndex = rightChildIndex;
           }

           if (maxChildIndex !== currentIndex) {
               [this.heap[currentIndex], this.heap[maxChildIndex]] = [this.heap[maxChildIndex], this.heap[currentIndex]];
               currentIndex = maxChildIndex;
           } else {
               break;
           }
       }
   }
}

// Example usage of MaxHeap:
const maxHeap = new MaxHeap();
maxHeap.buildHeap([10, 5, 15, 3, 7]);
console.log(maxHeap.heap); // Output: [15, 7, 10, 3, 5]

maxHeap.insert(20);
console.log(maxHeap.heap); // Output: [20, 7, 15, 3, 5, 10]

console.log(maxHeap.removeMax()); // Output: 20
console.log(maxHeap.heap); // Output: [15, 7, 10, 3, 5]

console.log(maxHeap.removeMax()); // Output: 15
console.log(maxHeap.heap); // Output: [10, 7, 5, 3]
