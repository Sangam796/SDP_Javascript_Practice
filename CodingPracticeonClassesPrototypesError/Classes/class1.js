/*Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles 
constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and 
perimeter (circumference).*/
class Circle
{
    constructor(radius)
    {
        this.radius = radius;
    }

    getArea()
    {
        return  Math.PI * this.radius*this.radius;
    }

    getPerimeter()
    {
        return 2 * Math.PI * this.radius;
    }
}

var c1 = new Circle(11);
console.log(c1.getArea());
console.log(c1.getPerimeter());
