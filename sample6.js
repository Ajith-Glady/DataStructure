// function bubbleSort(arr){
//    let swap = true
//    while(swap){
//       swap = false
//       for(let i=0 ; i<arr.length ; i++){
//          if(arr[i] > arr[i+1]){
//             let temp = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = temp
//             swap = true
//          }
//       }
//    }

//    return arr
// }

// console.log(bubbleSort([]));



// function quickSort(arr){

//    if(arr.length < 2){
//       return arr
//    }

//    let pivot = arr[arr.length-1]
//    let leftArray = []
//    let rightArray = []

//    for(let i=0 ; i<arr.length-1 ; i++){
//       if(arr[i] > pivot){
//          rightArray.push(arr[i])
//       }else{
//          leftArray.push(arr[i])
//       }
//    }

//    return [...quickSort(leftArray),pivot,...quickSort(rightArray)]
// }

// console.log(quickSort([8,6,21,1,83]));


class Node{
   constructor(value){
      this.value = value
      this.next = null
   }
}

class Stack{
   constructor(){
      this.head = null
      this.size = 0
   }

   delete(element){
      let 
      for(let i=0 ; i<this.size ; i++){

      }
   }
}