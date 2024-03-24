

function checkPrime(num){
   if(num < 2){
      return false
   }
   for(let i=2 ; i<num/2 ; i++){          // O(n/2)
      if(num % i == 0){
         return false
      }
   }
   return true
}

console.log(checkPrime(10));
console.log(checkPrime(3));
console.log(checkPrime(1));

// The Big-O of this problem is O(n/2)