/*
Create a class named User and create a way to check the number of users (number of instances) were created, so that the 
value can be accessed as a class attribute.
 */

class User
{
    static count = 0;
    constructor()
    {
       User.count++;
    }

    static countUser()
    {
        console.log("Number of users created till now = "+User.count);
    }
}

var user1 = new User();
var user2 = new User();
var user3 = new User();
User.countUser();