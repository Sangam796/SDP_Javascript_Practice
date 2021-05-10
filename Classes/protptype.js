/**
 * SOLVING THE SAME INHERITANCE PROGRAM USING PROTOTYPE
 * Create a class named 'Member' having the following members:
Data members
1 - Name
2 - Age
3 - Phone number
4 - Address
5 - Salary
It also has a method named 'printSalary' which prints the salary of the members.
Two classes 'Employee' and 'Manager' inherits the 'Member' class. The 'Employee' and 'Manager' classes have data members 'specialization' and 
'department' respectively. Now, assign name, age, phone number, address and salary to an employee and a manager by making an object of both of 
these classes and print the same. */


function Member(Name,Age,Phoneno,Address,Salary)
{
    this.Name = Name;
    this.Age = Age;
    this.Phoneno = Phoneno;
    this.Address = Address;
    this.Salary =Salary;

}

Member.prototype.printSalary = function()
{
    console.log(`Salary = ${this.Salary}`);


}
Member.prototype.printDetails = function()
{
    console.log("Member details:");
    console.log(`Name = ${this.Name}\nAge =  ${this.Age}\nPhone Number = ${this.Phoneno}\nAddress = ${this.Address}`);


}

var memb = new Member("Sandesh", 22, 98111, "Nepal", 10000000);
memb.printDetails();

function Employee(Name,Age,Phoneno,Address,Salary,Specialization)
{
    Member.call(this,Name,Age,Phoneno,Address,Salary);
    this.Specialization = Specialization;
}
Object.setPrototypeOf(Employee,Member.prototype);//employee extends member
Employee.prototype.printEmployeeDetails = function()
{
    console.log("\nEmployee details:");
    console.log(`Name = ${this.Name}\nAge =  ${this.Age}\nPhone Number = ${this.Phoneno}\nAddress = ${this.Address}\nSpecialization = ${this.Specialization}`);
}




var emp = new Employee("Sandesh", 22, 98111, "Nepal", 10000000, "Android Developer");
emp.printEmployeeDetails();

