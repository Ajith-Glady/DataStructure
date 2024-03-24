function linearSearch(arr,t){
   for(let i=0 ; i<arr.length ; i++){
      if(arr[i]==t) return i
   }
   return -1
}

console.log(linearSearch([3,5,6,2,9,34,21,15],21));
console.log(linearSearch([3,5,6,2,9,34,21,15],39));
console.log(linearSearch([3,5,6,2,9,34,21,15],2));