// function sumArray(arr, index) {
//    if (index >= arr.length) {
//       return 0;
//    }

//    return arr[index] + sumArray(arr, index + 1);
// }


// const array = [1, 2, 3, 4, 5];
// const sum = sumArray(array, 0);
// console.log("Sum of array elements:", sum); // Output: 15


function arraySum(arr,index){
   if(index == arr.length){
      return 0
   }
   return arr[index] + arraySum(arr,index + 1)
}

console.log(arraySum([1,2,3,4,5],0));