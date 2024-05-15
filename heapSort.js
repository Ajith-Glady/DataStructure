class MaxHeap {
   constructor() {
       this.heap = [];
   }

   buildHeap(arr) {
       this.heap = [...arr];
       for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
           this.heapify(i, this.heap.length);
       }
   }

   heapify(index, heapSize) {
       const leftChildIndex = 2 * index + 1;
       const rightChildIndex = 2 * index + 2;
       let largest = index;

       if (leftChildIndex < heapSize && this.heap[leftChildIndex] > this.heap[largest]) {
           largest = leftChildIndex;
       }
       if (rightChildIndex < heapSize && this.heap[rightChildIndex] > this.heap[largest]) {
           largest = rightChildIndex;
       }

       if (largest !== index) {
           [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
           this.heapify(largest, heapSize);
       }
   }

   // Perform heap sort
   heapSort() {
       const n = this.heap.length;
       this.buildHeap(this.heap);
       for (let i = n - 1; i > 0; i--) {
           [this.heap[0], this.heap[i]] = [this.heap[i], this.heap[0]];
           this.heapify(0, i);
       }

       return this.heap;
   }
}


// Example usage of Heap Sort:
const inputArray = [12, 11, 13, 5, 6, 7];
const maxHeap = new MaxHeap();

console.log("Input Array:", inputArray);
maxHeap.buildHeap(inputArray);
const sortedArray = maxHeap.heapSort();

console.log("Sorted Array (ascending order):", sortedArray);
