class Rectangle
{
    constructor(len, width)
    {
        this.len = len;
        this.width = width;
    }

    getArea()
    {
        return this.len * this.width;
    }
}


var recBox = new Rectangle(4,5);
console.log(recBox.getArea());
