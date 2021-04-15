//calculate max and min from the given numbers and find hcf of those numbers

let num1=3, nume = 12 , num3 = 14, num4 = 24;
function HCF(n1,n2)
{
    let hcf = 1;
    for(let i=2;i<=n1;i++)
    {
        if(n1%i==0&&n2%i==0)
        hcf = i;
    }
    return hcf;
    
}
 function calcHCF(n1, n2, n3, n4)
 {
      max = Math.max(n1,n2,n3,n4);
      min = Math.min(n1,n2,n3,n4);

     return HCF(min,max);
 }

 console.log(calcHCF(12,13,14,16));