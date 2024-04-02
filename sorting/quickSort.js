function quickSort(arr){
   if(arr.length <= 1){
      return arr
   }

   let leftArray = []
   let rightArray = []
   let pivot = arr[arr.length-1]
   for(let i=0 ; i<arr.length-1 ; i++){
      if(arr[i] < pivot){
         leftArray.push(arr[i])
      }else{
         rightArray.push(arr[i])
      }
   }
   return [...quickSort(leftArray),pivot,...quickSort(rightArray)]
}

let arr = quickSort([3,69,1,7,19,38])
console.log(arr);