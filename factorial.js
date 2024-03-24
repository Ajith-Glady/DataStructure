function findFactorial(num){
   
   let sum = 1
   for(let i=1 ; i<=num ; i++){        // O(n)
      sum = sum * i
   }
   return sum
   
}

console.log(findFactorial(0));

// big-O of this code is O(n)  -- Linear time complexity