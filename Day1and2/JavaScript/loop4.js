let upperBound = 10;
let iterator = 2;
let divisor;
let count = 0;

for (iterator; iterator <= upperBound; iterator++) {
    divisor = 2;
    count = 0;
    while (divisor <= iterator) {
        if (iterator % divisor == 0) { count++; }
        //console.log(divisor);
        divisor++;

    }
    if (count == 1)
        console.log(iterator);

}