/**
 * Given an int, figure out how many ones, threes and nines you could fit into the number. You must create a class.
 *  You will make variables (class.ones, class.threes, class.nines) to do this.
 */

class CountOneThreeNine
{
    ones = 0;
    threes = 0;
    nines = 0;

    constructor(value) {
        this.value = value;
        this.ones = 0;
        this,this.threes = 0;
        this.nines = 0;
    }

    getCount()
    {
        this.ones = this.value
        var val2 = 3;
        var val3 = 9;
        while(val2<=this.value)
        {
           this.threes += 1;
           val2 += 3;
        }

        while(val3<=this.value)
        {
           this.nines += 1;
           val3 += 9;
        }

        console.log("For value = "+this.value+"\nones = "+this.ones+", threes = "+this.threes+", nines = "+  this.nines);

    }
    

}
 
 var countobj = new CountOneThreeNine(10);
 countobj.getCount();