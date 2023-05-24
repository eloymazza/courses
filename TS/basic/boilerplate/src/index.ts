// Class parameter example

class Person {
  constructor(private name: string, private age: number) {}

  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`
    );
  }
}

const person = new Person('John', 30);
console.log(person);
