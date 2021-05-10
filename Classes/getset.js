//calculate area of square using get set 
class Square
{
    constructor(width)
    {
        this.width = width;
    }

    get Area()
    {
        return this.width * this.width;
    }

    set Area(area)
    {
        this.width = Math.sqrt(area);
    }
}

var squareBox = new Square(5);
console.log(squareBox.Area); //25
console.log(squareBox.width); //5
squareBox.Area = 100; 
console.log(squareBox.Area); //100
console.log(squareBox.width); //10