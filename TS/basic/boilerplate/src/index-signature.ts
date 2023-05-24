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
