function numbers(num){
   if(num < 0){
      return 1
   }
   return numbers(num-1)
   
}