//Create a constructor function Calculator that creates “extendable” calculator objects

function Calculator(str)
{
    arr = str.split(' ');
    
    let num1 = +arr[0];
    let num2 = +arr[2];
    let operator = arr[1];
    
    if(operator === '+')
  this.result  = num1+num2;
    else if(operator ==='-')
     this.result = num1 - num2;
}

let calculator = new Calculator("2 - 3");
console.log(calculator.result);