let person = {};
//using conditional operator
console.log(person.fullname ? person.fullname.surname : undefined); 
//in the above line, person.fullname is not present in the object , so it will return undefined.

console.log(person.country ? person.country.city ? person.country.city.street: undefined : undefined); 
//in the above line also it will return undefined, but the same property is repeated multiple times to access inner properties

//optional chaining helps us to reduce repititive coding of same property of object to access specific value using ?.


console.log(person?.country?.city?.street);
//if person is not present returns undefined, if country is not present returns undefined and so on, if all are defined, it will return the last property value