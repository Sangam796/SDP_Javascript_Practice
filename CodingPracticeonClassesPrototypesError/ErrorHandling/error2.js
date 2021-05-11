//if the password is wrong throw invalid password error

let error = new Error("InvalidPassword: Password do not match");

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
        try
        {
    if (!(Facebook.#password === this.pass))
    throw error;
    return true
        }
        catch(error)
        {
            console.log(error.message);
            return false;
    }
}
 
}
user1 = new Facebook("sangam", 123)
console.log(user1.checkPassword()); //return false
user2 = new Facebook("sangam", "Ab23#$!l");
console.log(user2.checkPassword()); //returns true
