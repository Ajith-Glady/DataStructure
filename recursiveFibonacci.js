

// function fibonacci(num){
//    if(num < 2){
//       return num
//    }
//    return fibonacci(num-1) + fibonacci(num-2)
// }

function fibonacci(limit, a = 0, b = 1) {
   if (a <= limit) {
       console.log(a);
       fibonacci(limit, b, a + b);
   }
}


// console.log(fibonacci(0));
// console.log(fibonacci(2));
// console.log(fibonacci(1));

fibonacci(6)