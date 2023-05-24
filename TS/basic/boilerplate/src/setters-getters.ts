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

const personStore: PersonStore = {
  setName: (value: string) => {},
  setAge: (value: number) => {},
  getName: () => 'John',
  getAge: () => 30,
};
