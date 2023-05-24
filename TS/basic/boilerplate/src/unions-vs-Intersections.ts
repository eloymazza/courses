type A = { a: string };
type B = { b: string };

// Unions (must have one properties of a type, or both !but cannot read it safely)
type AB = A | B;
const ab: AB = { a: 'a' };
const ab1: AB = { b: 'b' };
const ab2: AB = { a: 'a', b: 'b' };

//abd.b; // error (ts cannot ensuer b is present)

// Intersections (must have all properties of both types)
type AInterB = A & B;
const aInterB = { a: 'a', b: 'b' };
