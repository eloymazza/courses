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

var t = 1;
t = 2;
console.log(t);
class Test {
  push = (a: number) => {};
}

const x = [1, 2, 3];
x[-1] = -1;
x[x[x.indexOf(2)]] = 4;
