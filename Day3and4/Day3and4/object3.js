//copy and referencing in object
/* if variable referring to one object is simply assigned to another variable then both the variable will be
referring to the same object */

function Country(countryName, countryCapital, countryContinent)
{
    this.cName = countryName;
    this.cCapital = countryCapital;
    this.cContinent = countryContinent;
}

let india = new Country("India", "New Delhi", "Asia");
console.log(india);
//assigning india to another variable indiaduplicate
let indiaduplicate = india; //(Copying the reference)india duplicate is referring to the same object as that referred by india
console.log(indiaduplicate);

delete indiaduplicate.cContinent; //deleting the cContinent property from indiaduplicate, changes are reflected to india object also
console.log(india);
console.log(india==indiaduplicate); //true

//cloning is the method to create an independent object with the same property of existing object,
let independentIndia = {};
for( let key in india)
independentIndia[key] = india[key]; //now independentIndia is the independent object with same property as that of india
console.log(independentIndia);
console.log(india==independentIndia); //false

//same can be done using .assign method
let IndependentIndia ={};
Object.assign(IndependentIndia,india);
console.log(IndependentIndia);
IndependentIndia.neighbour = "Nepal";

//merging the objects using .assign method
Object.assign(IndependentIndia, independentIndia);
console.log(IndependentIndia);

