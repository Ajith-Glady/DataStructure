 function findElement(arr,target){
   return search(arr,target,0,arr.length - 1)
 }

 function search(arr,target,leftIndex,rightIndex){
   if(leftIndex > rightIndex){
      return -1
   }

   let middleIndex = Math.floor((leftIndex + rightIndex)/2)
   if(target === arr[middleIndex]){
      return middleIndex
   }

   if(target < arr[middleIndex]){
      return search(arr,target,leftIndex,middleIndex-1)
   }else{
      return search(arr,target,middleIndex + 1, rightIndex)
   }
 }

 console.log(findElement([2,3,5,6,7,15,52],3));
 console.log(findElement([2,3,5,6,7,15,52],33));