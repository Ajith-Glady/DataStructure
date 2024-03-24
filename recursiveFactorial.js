

function recursiveFactorial(num){
   if(num == 0) return 1
   return recursiveFactorial(num-1) * num
}

console.log(recursiveFactorial(3));
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(6));