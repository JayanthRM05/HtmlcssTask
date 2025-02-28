//"use strict";
//type guard
// A type guard is some expression that performs a runtime check that guarantees the type in some scope.
//Object.defineProperty(exports, "__esModule", { value: true });
// To define a type guard, we simply need to define a function whose return type is a type predicate:
// function isFish(pet: Fish | Bird): pet is Fish {
//   return (pet as Fish).swim !== undefined;
// }
// Mapped types build on the syntax for index signatures, which are used to declare the types of properties which have not been declared ahead of time:
// type OnlyBoolsAndHorses = {
//     [key: string]: boolean | Horse;
//   };
//   const conforms: OnlyBoolsAndHorses = {
//     del: true,
//     rodney: false,
//   };
// type OptionsFlags<Type> = {
//     [Property in keyof Type]: boolean;
//   };
// Mapping Modifiers
// two additional modifiers : readonly and ?
// Removes 'readonly' attributes from a type's properties
// type CreateMutable<Type> = {
//     -readonly [Property in keyof Type]: Type[Property];
//   };
//   type LockedAccount = {
//     readonly id: string;
//     readonly name: string;
//   };
//   type UnlockedAccount = CreateMutable<LockedAccount>;
// Removes 'optional' attributes from a type's properties
// type Concrete<Type> = {
//     [Property in keyof Type]-?: Type[Property];
//   };
//   type MaybeUser = {
//     id: string;
//     name?: string;
//     age?: number;
//   };
//   type User = Concrete<MaybeUser>;
// type ExtractPII<Type> = {
//     [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
//   };
//   type DBFields = {
//     id: { format: "incrementing" };
//     name: { type: string; pii: true };
//   };
//   type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;
// +++++++++Classes++++++++++
// we construct an instance of the Greeter class using new. This calls into the constructor we defined earlier, creating a new object with the Greeter shape, and running the constructor to initialize it.
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//       this.greeting = message;
//     }
//     greet() {
//       return "Hello, " + this.greeting;
//     }
//   }
//   let greeter = new Greeter("world");
// ++++++++++Inheritance+++++++++
// One of the most fundamental patterns in class-based programming is being able to extend existing classes to create new ones using inheritance.
// class Animal {
//     move(distanceInMeters: number = 0) {
//       console.log(`Animal moved ${distanceInMeters}m.`);
//     }
//   }
//   class Dog extends Animal {
//     bark() {
//       console.log("Woof! Woof!");
//     }
//   }
//   const dog = new Dog();
//   dog.bark();
//   dog.move(10);
//   dog.bark();
// +++++++++++++++++Axios++++++++++
// var axios_1 = require("axios");
// axios_1.default.get('https://dummyjson.com/products')
//     .then(function (response) {
//     console.log('Data:', response.data);
// })
//     .catch(function (error) {
//     if (error.response) {
//         // The server responded with a status outside the range of 2xx
//         console.error('Error Status:', error.response.status);
//         console.error('Error Data:', error.response.data);
//     }
//     else if (error.request) {
//         // The request was made but no response was received
//         console.error('No Response Received:', error.request);
//     }
//     else {
//         // Something went wrong in setting up the request
//         console.error('Request Error:', error.message);
//     }
// });
