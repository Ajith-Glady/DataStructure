function searchElement(arr,target){
   let leftIndex = 0
   let rightIndex = arr.length - 1
   
   while(leftIndex <= rightIndex){
      let middleIndex = Math.floor((leftIndex + rightIndex)/2)
      if(arr[middleIndex] == target){
         return middleIndex
      }else if(arr[middleIndex] > target){
         rightIndex = middleIndex
      }else{
         leftIndex = middleIndex
      }
   }
   return -1
}

console.log(searchElement([1,2,3,4,5,6,7,8],5));