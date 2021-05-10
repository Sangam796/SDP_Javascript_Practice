//count the number of objects being created
class CountObj
{
    static count = 0;
   
    static countObj()
    {
        this.count++;
        console.log(this.count);
    }
}
var obj1 = new CountObj();
CountObj.countObj();
var obj2 = new CountObj();
CountObj.countObj();
var obj3 = new CountObj();
CountObj.countObj();
