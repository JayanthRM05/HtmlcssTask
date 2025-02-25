//const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }

//   };


//   person.name = function() {
//     return (this.firstName + " " + this.lastName).toUpperCase();
//   };
  //console.log(person.name());
  
  //console.log(person.fullName());
  //+++++++++++++++++++++++object Construction +++++++++++++++++++++++++++++++++++++
  class Person {
    constructor(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }
}
  const myFather = new Person("John", "Doe", 50, "blue");

  console.log("My father is " + myFather.age + ".");
  