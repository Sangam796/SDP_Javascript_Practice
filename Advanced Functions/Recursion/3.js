//fibonacci series
function calcFibonacci(n) {
    if(n <= 1)
    return n 
    else return calcFibonacci(n - 1) + calcFibonacci(n - 2);
  }
  
  console.log( calcFibonacci(5)); 
  