
function checkPower(num){
   while(num > 1){               // O(logn)
      if(num % 2 == 0){
         num = num / 2
      }else{
         return false
      }
   }
   return true
}

console.log(checkPower(3));
console.log(checkPower(2));

// Input size reuced by half 
// O(logn)