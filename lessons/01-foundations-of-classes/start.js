import assert from "node:assert";
/*
 * What are classes?
 *
 * Classes are a template for creating objects and a
 * way to keep your code modular and reusable.
 *
 * Read more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * */

/* ----------------HOW TO CREATE A CLASS ------------------------*/
// To delcare a class you have to use the 'class' keyword
class Demo {
  // A class can contain a 'constructor' to create properties
  // that can be used throughout the class
  constructor(demoName) {
    // The 'this' keyword applies to the context of where
    // it is being set. In the context of a class it is
    // always a reference to an object.
    //
    // Read more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
    this.name = demoName;
  }

  // Methods can be used to do certain operations with the properties
  // defined in or out of the class. They essentially look like function
  // without the 'function' keyword
  greetPerson() {
    console.log(`Hello ${this.name}`);
  }
}

// You can instantiate a class by using the `new` keyword.
// The arguments passed to the ''()' will be available in the
// constructor. In this instance we'll pass a string that will
// be the 'demoName' parameter.
const demo1 = new Demo("Chris");

// You can access the methods using dot notation
demo1.greetPerson(); // Output 'Hello Chris'

/* ----------------CLASS INHERITANCE------------------------*/
// Classes can be created as children of another constructor. This
// allows classes to inherit the methods and properties defined
// in another. Think of it like creating a class from another
// template class.
class Person {
  logJob() {
    console.log(`Their job is: ${this.job}`);
  }
}

class Employee extends Person {
  constructor(job) {
    // super is called to access properties
    // on an objects constructor. Without it
    // this will throw an error.
    super();
    this.job = job;
  }
}

// Even though the 'Employee' class doesn't have a
// 'logJob' method on it, it inherits it from
// the 'Person' class.
const teacher = new Employee("Teacher");
teacher.logJob(); // Output: Their job is: Teacher

// You can also write this as a one-liner if needed
new Employee("Farmer").logJob(); // Output: Their job is: Farmer

/* ---------------- EXERCISES ------------------------*/

/* 01. Create your first class
 *
 * Steps:
 * 1. Create a class name 'Animal' with the class keyword
 * 2. Add a 'constructor' with the property 'species'
 * 3. Create a method called 'getSpecies' that
 *    returns the species property.
 * */

// Un-comment this test when you are ready to check
// your work
// const pig = new Animal("pig");
// assert(
//   pig.getSpecies() === "pig",
//   "Exercise 1 Failed: The 'getSpecies' method doesn't log the correct value of 'pig'"
// );
// console.log("Exercise 1 Passed!");

/* 02.
 *
 * Steps:
 * 1. Create a class called 'Sports'
 * 2. Add a 'constructor' with the property 'type'
 * 3. Create a method called 'getType' and return the 'type' property
 * 4. Create a class called 'Surfing' that inherits the 'Sports' class
 * 5. Add a property called 'numberOfBoards' in the constructor
 * 6. Create a method called 'getTotalBoards' that returns the 'numberOfBoards'
 * */

// Un-comment this test when you are ready to check
// const surfing = new Surfing(40);
// assert(
//   surfing.getType() === "surfing",
//   `Exercise 2 Failed: Expected 'getType' method to return 'surfing'`
// );
// assert(
//   surfing.getTotalBoards() === 40,
//   `Exercise 2 Failed: Expected 'getTotalBoards' method to return 40`
// );
// console.log("Exercise 2 Passed!");
