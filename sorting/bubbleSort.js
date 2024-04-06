// function bubbleSort(arr){
//    let swap = true
//    while(swap == true){
//       swap = false
//       for(let i=0 ; i<arr.length-1 ; i++){
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

function bubbleSort(arr){
   let swap = true
   while(swap){
      swap = false
      for(let i=0 ; i<arr.length-1 ; i++){
         if(arr[i] > arr[i+1]){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            swap = true
         }
      }
   }
   return arr
}

let result = bubbleSort([3,2,83,22,92,19])
let result1 = bubbleSort([-3, 6, 20, 80, 78, 54, -6])
console.log(result);
console.log(result1);