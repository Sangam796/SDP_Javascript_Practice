//calculate power using power(x,n) function
let number =3;
let power = 5;

function calcPower(x,n=2)
{
    let power = 1;
   
    for(var i=1;i<=n;i++)
    {
        power = power * x;
        //console.log(power);
    }
    return power;
}

console.log(`${number}^${power} = ${calcPower(number, power)}`);
