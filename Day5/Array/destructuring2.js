/**
 * There is a salaries object:
Create the function topSalary(salaries) that returns the name of the top-paid person.

If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.
 */
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries)
{
    let maxSalary = 0;
    let topPaidPerson = null;
    for( let[person,salary] of Object.entries(salaries))
    {
        if(salary>maxSalary)
       { maxSalary = salary;
        topPaidPerson = person;
       }
    }
    return topPaidPerson;
}

console.log(topSalary(salaries));