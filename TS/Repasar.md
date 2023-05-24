# Unknown

Unknown is a safest option than ANY. It supports any type like ANY does but instead it doesn't allow you to access to or apply methods without previous narrowing. Any was mean to make migrations from JS to TS easier.

## Declarations

For example if you have proccess.env that should be provided by node js runtime, you can declare anyway using "declare const process: any".
You can create a env.t.ts in order to put there all the declarations.
Also you can use @types/node in order to expose these types. Then you can find all the possible proccess definition in node_modules/@types

## This in functions

If the function is a normal function, the this keyword will be taken from the caller context.

If the function is an arrow function, the this keyword will be taken from the contexto of the function.

## readconly

You can mark a property as readonly, so you cant reasign any class property.

## Literal Types

You can set a literal type to a variable. For example let direction: 'North'. Here we are literally telling that direction will be north everytime.
We usually uses literal types in union types.

## Narrowing

Narrowing is a way to ensure the type of a variable by checking its type. Mostly used when the varaible type is union type so the variable can be ambiguous.
If the type is object, you cannot narrow down using this method since allways will return object. In this cases you have to use instance of. This can only be done for instances of classes objects. For this casese you can use the "in" operator and check if a property is in a given object.
(Example: if("size" in shape) { return shape.size \* shape.size })

## discriminated unions

is like add a kind properties to two tpyes you are gonna to use, then you check this kind property in order to narrow down objects.

## class parameter properties

For avoiding create properties, and assign them in the constructor, you can directly set accessor modificators to parameters in the constructor function
and that's all.

// Class parameter example

class Person {
constructor(private name: string, private age: number) {}

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }

}

const person = new Person('John', 30);
console.log(person); // { name: 'John', age: 30 }

## non - null assertion

Adding ! at the end of a variable will result in make the assertion your know that the value is not null

## Interfaces merging

Interfaces with the same name will merge its properties.

## Type refactor

If you have something like this

type Point = {
type: 'test' | 'demo',
x: number,
};

You can select 'test' | 'demo' , press ctrl + shift + r and extract the type to a new type aliaeses

## type vs interfaces

Type supports: Unions, Intersections, Primitives, Shorthand functions, Advanced Type functions
Interfaces supports: Declaration Merging, Familiarity (extends).

## Never

Never is a type inferred by TS when something never return a type. Like infnite loops or code blocks throwing Error
Never con only be assigned to never.

## Implements

Used in classes for ensuring you are implementing all required signatures of the class

## Definite assignment

You can use a ! at the and of variable name to ensure you know that variable will have a value and not be undefined. This can be ussed in classes too

## User defined type guards

You can create types ensurance in order to ensure the type of an object. The is keyword will ensure that type is Square if return true.

function isSquare(shape: Shape): shape is Square {
return 'size' in shape;
}

## Assertion functions

You can create a function for asserting some conditon. You have to create the assertion function, and return the "asserts" + condition type.

function assert(condition: unknown, message: string): asserts condition {
if(!condition) throw new Error(message);
}

## User Defined type guards vs Assertion Functions

User defined type guards in application develpment.
Assertions in Unit Tests.

## Function call signature

You can define a function inside object the following way:

type Add = {
(a: number, b: number): number;
};

const add: Add = (a: number, b: number) => a + b;

## Abstract classes

Same as abstract classes in POO. You have to mark a class declaration as abstract and provide an abstract method signature

## Index Signature

You can create maps using index signature as follows:

type Person2 = {
dsiplayName: string;
email: string;
};

type PersonDictionary = {
[username: string]: Person2 | undefined;
};

const persons: PersonDictionary = {
john: { dsiplayName: 'John', email: '' },
jane: { dsiplayName: 'Jane', email: '' },
[1]: { dsiplayName: 'Jane', email: '' },
2: { dsiplayName: 'Jane', email: '' },
// pablo: { dsiplayName: 'Jane', age: ''}, // incorrect
// oscar: true // incorrect
};

const result = persons['john'];
//console.log(result.dsiplayName); // error because can be undefined
if (result) {
console.log(result.dsiplayName); // now we know that result is not undefined
}

## Readonly

For avoiding to call functions that mutates a variable, you can mark it as "readonly". Then TS will automatically tell you if you are calling a mutable method
and will raise an error.

function reverseSorted(input: readonly number[]): number[] {
// return input.sort().reverse(); // error
return input.slice().reverse(); // error
}

## Tuples

Tuple is an array you decide the lenght and types of each element

## Double assertion

You can assign an objectto other if it contains mathing properties as follows:

let point3d = point2d as point3d

but you cannot put an object that has not any matching.

let point3d = person as point3d

So here you can use :

let point3d = person as unknown as point3d

It's recommended to avoid this and use only if extremly needed.

## Const assertion

You can set an object "as const" in order to disallow object properties change.

const a = { a: "a" } as const
a.a = "b" // error

So now the object "a" it's inmutable. Underneath the properties will be set as readonly. Const assertion will
change all properties values of an object as literal types.

## typeof

Extract a type from a variable. An object or a varaible.

const point = {
x: 0,
y: 0
}

type Point = typeof Point;

let pointA: type Point;

## lookup types

I you have a complex object, with a lot of properties but you want to create a type with a portion, you can use lookup types.

`type ComplexObj = {
  a: number;
  b: number;
  e: number;
  f: {
    f1: number;
    f2: string;
  };
  g: [{ g1: number }];
};`

let f: ComplexObj["f"]; // { f1: number, f2: string }
let g1: ComplexObj["g"][0] // { g1: number }

## keyof

To obtain all keys of an object.

type Object2 = {
a: number;
b: number;
}

const obj: keyof Object2 = "a" // "a" | "b"

// Another usage

function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
console.log(obj[key]);
}

const example: Object2 = {
a: 1,
b: 2,
};

logGet(example, 'a');
logGet(example, 'b');

## Conditional Types

Conditonal types are like ternary expressions that evaluates a type and return a type if the evaluation returned true and another type otherwise

type Diff<T, U> = T extends U ? never : T; // Remove types from T that are assignable to U

const onlyNumber: Diff<string | number | boolean, string | boolean> = 1; // only number is diferent thatn string | boolean

type Filter<T, U> = T extends U ? T : never; // Remove types from T that are not assignable to U

//const onlyString2: Filter< boolean, string | number> = 'hello'; // error because boolean is not assignable to string | number
const onlyString2: Filter<string | boolean | number, string | number> = 'hello'; // result is string because string is assignable to string | number and boolean not

type NonNull<T> = Diff<T, null | undefined>; // Remove null and undefined from T

const notNull: NonNull<string | null | undefined> = 'hello'; // result is string because null and undefined were filtered out
//const failNotNull: NonNull<null | undefined> = null; // The result is never because null | undefined are assignable to null | undefined

## Infer keyword

In TypeScript, the infer keyword is used in conjunction with conditional types to infer or extract a type from another type. It is commonly used in generic type definitions to capture and use type information dynamically.

Here's an example usage of the infer keyword:

typescript
Copy code
type ExtractReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function add(a: number, b: number): number {
return a + b;
}

type AddReturnType = ExtractReturnType<typeof add>; // Inferred type: number
In the example above, the ExtractReturnType conditional type uses infer to capture the return type (R) of a given function type (T). If T matches the shape of a function type, the inferred return type R is extracted; otherwise, it defaults to never. The AddReturnType type demonstrates the usage of ExtractReturnType with the add function, resulting in the inferred type number.

By utilizing infer, TypeScript allows for powerful type inference and manipulation capabilities within conditional types.

## Mapped types

Mapped types are used when you want to go trhought all elements and set a type o perform an operation to each one:

`type Point = {
  x: number,
  y: number,
  z: number
}`

type ReadOnly<T> = {
readonly [k in keyof T] : T[k];
}

const center: ReadOnly<Point> = {
x: 0,
y: 0,
z: 0
}

// center.x = 100; // Error: Cannot assign to 'x' because it is a read-only property.

## Modifiers

"-" Removes a modifier like "optional = '?'" o 'readonly'

`type Opt3DPoint = {
  x: number;
  y: number;
  z?: number;
};`

type RemoveOpt<T> = {
readonly [k in keyof T]-?: T[k];
};

`const point3D: RemoveOpt<Opt3DPoint> = {
  x: 0,
  y: 0,
  //z?: 0, // An object member cannot be declared optional.
  z: 0,
};`

## Template literal type

You can use template literals as types in order to create specific string types.

type CSSValue =
| number
| `${number}px`
| `${number}em`
| `${number}rem`;

function size(input: CSSValue) {
if (typeof input === 'number') {
return `${input}px`;
}

return input;
}

size(10); // '10px'
size('10px'); // '10px'
size('10'); // 'error'
size('10em'); // '10em'
size('10rem'); // '10rem'
size('10ex'); // Argument of type '"10%"' is not assignable to parameter of type 'CSSValue'.

## Utility types

### Partial

Make all properties of a type optional

### Required

Make all properties of a type required

### Readonly

Make al props readonly

### Record <K, V>

Create an object type
Example: type Object = Record<string, { a: string, b: number }>
const obj: Object { a: "hola" b: 1 };
const obj2: Object { a: "hola" b: true }; // error

Or
type Roles = 'admin' | 'owner'
const people: Record<Roles, string[]> = {
'owner' : ['Eloy'],
'asssitant': ['Juan'] // error
}

## Project references

For reference a project from other project you have to set the refered project's TS config composite: true and rootDir: 'src' .
In the referencer project you have to add "references" : { "path": "../your-referenced-project-path/"}
Also in the referencer project change the "build" script to "tsc --build .". This way all dependencies will be compiled

## Property Key

Only number, string or symbol can be a key of a TS object. PropertyKey holds those types, so if you assign a varaible the type PropertyType you
are telling that variable is number | string | symbol.

## Awaited

Using awaitd you can otain the final value that will be returned when calling a n number of promises. For example:

const a = mew Promise(new Promise(() => 'test' )); // type a will be Promise<Promise<string>>

If you use Awaited<Promise<Promise<string>>> the output will be "string"

Allways you have something lke const a = await b; type of a will be Awaited<T>

## string manipulation utilities

You can use Upercase<string>, Lowercase<string>, Capitalize<string>, Uncapitalize<string>

## Setters and getters

You can create getters and setters types of classes using the map utilities.

type State = {
name: string;
age: number;
};

const state: State = {
name: 'John',
age: 30,
};

type Setter<T> = {
[K in keyof T]: (value: T[K]) => void;
};

let setters: Setter<State> = {
name: (value: string) => {},
age: (value: number) => {},
};

type SetProperty<K extends string> = `set${Capitalize<K>}`;

const setProp: SetProperty<'name'> = 'setName';

type SetterWithSet<T> = {
[K in keyof T & string as SetProperty<K>]: (value: T[K]) => void;
};

type GetterWithGet<T> = {
[K in keyof T & string as `get${Capitalize<K>}`]: () => T[K];
};

const settersWithSet: SetterWithSet<State> = {
setName: (value: string) => {},
setAge: (value: number) => {},
};

const getterWithGet: GetterWithGet<State> = {
getName: () => 'John',
getAge: () => 30,
};

type PersonStore = SetterWithSet<State> & GetterWithGet<State>;
`const personStore: PersonStore = {
  setName: (value: string) => {},
  setAge: (value: number) => {},
  getName: () => 'John',
  getAge: () => 30,
};`

## Unions Vs Intersections

type A = { a: string }
type B = { b: string }

// Unions (must have one properties of a type, or both !but cannot read it safely)
type AB = A | B;
const ab: AB = { a: 'a'}
const ab1: AB = { b: 'b'}
const ab2: AB = { a: 'a', b: 'b'}

abd.b // error (ts cannot ensuer b is present)

// Intersections (must have all properties of both types)
type AInterB = A & B;
const aInterB = { a: 'a', b: 'b'}

## Enums

Dont use them !

Alternatives

export const LoginMode = {
device: 'device',
email: 'email',
social: 'social',
} as const;
