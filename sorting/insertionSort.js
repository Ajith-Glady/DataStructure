// function insertionSort(arr){
//    for(let i=1 ; i<arr.length ; i++){
//       let value = arr[i]
//       let j = i-1
//       while(j >= 0 && arr[j] > value){
//          arr[j+1] = arr[j]
//          j = j-1
//       }
//       arr[j+1] = value
//    }
//    return arr
// }


function insertionSort(arr){
   for(let i=0 ; i<arr.length ; i++){
      let value = arr[i]
      let j = i-1
      while(j >= 0 && arr[j] > value){
         arr[j+1] = arr[j]
         j = j-1
      }
      arr[j+1] = value
   }
   return arr
}

let res = insertionSort([4,94,43,1,20,-2])
console.log(res);