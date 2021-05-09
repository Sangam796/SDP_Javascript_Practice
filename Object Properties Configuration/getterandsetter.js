//demo program for setter and getter property of object

let user = {
    name: "Sangam",
    surname: "Giri",
  
    get fullName() { //getter
      return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) {  //setter
      [this.name, this.surname] = value.split(" ");
    }
  };
  console.log(user.fullName); //Sangam Giri
  user.fullName = "Sameer Rai";
  console.log(user.name); // Sameer
  console.log(user.surname); // Rai
