// function mergeSort(arr) {
//    if (arr.length < 2) {
//       return arr
//    }
//    let mid = Math.floor(arr.length / 2)
//    const left = arr.slice(0, mid)
//    const right = arr.slice(mid)
//    return merge(mergeSort(left), mergeSort(right))
// }

// function merge(leftArray, rightArray) {
//    const sortedArr = []
//    while (leftArray.length && rightArray.length) {
//       if (leftArray[0] <= rightArray[0]) {
//          sortedArr.push(leftArray.shift())
//       } else {
//          sortedArr.push(rightArray.shift())
//       }
//    }
//    return [...sortedArr, ...leftArray, ...rightArray]
// }



function mergeSort(arr){
   if(arr.length < 2){
      return arr
   }
   const mid = Math.floor(arr.length/2)
   const leftArray = arr.slice(0,mid)
   const rightArray = arr.slice(mid)
   return merge(mergeSort(leftArray),mergeSort(rightArray))
}
function merge(leftArray,rightArray){
   const sortedArr = []
   while(leftArray.length && rightArray.length){
      if(leftArray[0] <= rightArray[0]){
         sortedArr.push(leftArray.shift())
      }else{
         sortedArr.push(rightArray.shift())
      }
   }
   return[...sortedArr,...leftArray,...rightArray]
}

console.log(mergeSort([3, 23, 99, 21, 84, 1]));