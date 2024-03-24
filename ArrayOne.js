let arr = [3,5,1,4,9,3,2,6]

function checkSum (arr){
   for(let i=0 ; i<arr.length ; i++){
      for(let j=i+1 ; j<arr.length ; j++){
         if(arr[i] + arr[j] == 10){
            return [arr[i],arr[j]]
         }
      }
   }
}

let x = checkSum(arr)
console.log(x);