/**Create a class named 'Member' having the following members:
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

class Member
{
    constructor(Name,Age,Phoneno,Address,Salary)
    {
        this.Name = Name;
        this.Age = Age;
        this.Phoneno = Phoneno;
        this.Address = Address;
        this.Salary =Salary;
    }

    printSalary()
    {
        console.log(`Salary = ${this.Salary}`);
    }
    printDetails()
    {
        console.log(`Name = ${this.Name}\nAge =  ${this.Age}\nPhone Number = ${this.Phoneno}\nAddress = ${this.Address}`);

    }
}
class Employee extends Member
{
    constructor (Name,Age,Phoneno,Address,Salary,Specialization)
    {
    super(Name,Age,Phoneno,Address,Salary);
    this.Specialization = Specialization;
    }

   printEmployeeDetails()
    {
        this.printDetails();
        this.printSalary();
        console.log(`Specialization = ${this.Specialization}`);
    }

}


class Manager extends Member
{
    constructor (Name,Age,Phoneno,Address,Salary,Department)
    {
    super(Name,Age,Phoneno,Address,Salary);
    this.Department = Department;
    }

    printManagerDetails()
    {
        this.printDetails();
        this.printSalary();
        console.log(`Department = ${this.Department}`);
    }

    

}

var emp = new Employee("Sandesh", 22, 98111, "Nepal", 10000000, "Android Developer");
emp.printEmployeeDetails();
var mgr =new Manager("David", 22, 98144411, "Nepal", 10000000, "Marketing");
mgr.printManagerDetails();
