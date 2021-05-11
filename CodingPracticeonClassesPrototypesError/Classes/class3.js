/**
 * Write a class called Name and create the following attributes given a first name and last name (as fname and lname):

An attribute called fullname which returns the first and last names.
 */

class Name
{
    constructor(name)
    {
        this.fullname = name;
        [this.fname , this.lname]= name.split(" ");

    }

    showName()
    {
        console.log("First Name = "+this.fname+"\nLast Name = "+this.lname);
    }
}

name1 = new Name("Sangam Giri");
console.log(name1);
name1.showName();
console.log(name1.fullname);
console.log(name1.fname);
console.log(name1.lname);