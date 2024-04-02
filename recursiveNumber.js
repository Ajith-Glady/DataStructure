function numbers(num){
   if(num < 0){
      return 1
   }
   console.log(num);
   return numbers(num-1)
   
}

numbers(10)