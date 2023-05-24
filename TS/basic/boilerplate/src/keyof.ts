type Object2 = {
  a: number;
  b: number;
};

const obj: keyof Object2 = 'a'; // "a" | "b"

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
