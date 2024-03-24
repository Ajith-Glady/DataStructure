function fibonacci(limit){
   let fib = [0,1]
   for(let i=2 ; i<limit ; i++){
      fib[i] = fib[i - 1] + fib[i - 2]
   }
   return fib
}

let numbers = fibonacci(6)
console.log(numbers)