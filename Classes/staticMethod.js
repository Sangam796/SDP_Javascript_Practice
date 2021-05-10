//check if two rectangular boxes dimension is equal or not
class Rectangle
{
    constructor(length, width)
    {
        this.length = length;
        this.width = width;
    }

    static isDimensionEqual(box1, box2)
    {
        return box1.length === box2.length && box1.width === box2.width;
    }

}

var box1 = new Rectangle(3,4);
var box2 = new Rectangle(3,4);
console.log(Rectangle.isDimensionEqual(box1,box2)); //true (static method is invoked using class name not object name)
/**static method will be created for a class not for every object */
