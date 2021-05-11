//check whether the user entered username and password is correct or not
//using private field

class Facebook
{
    static #password = "Ab23#$!l"; //password is declared as private
    static username = "sangam";
    constructor(user,pass)
    {
        this.user = user;
        this.pass = pass;
    }

    checkPassword()
    {
    return Facebook.#password === this.pass && Facebook.username === this.user;
    }
}

user1 = new Facebook("sangam", 123)
console.log(user1.checkPassword()); //return false
user2 = new Facebook("sangam", "Ab23#$!l");
console.log(user2.checkPassword()); //returns true
