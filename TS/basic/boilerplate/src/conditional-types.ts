// give me an example of conditional types
type Diff<T, U> = T extends U ? never : T; // Remove types from T that are assignable to U

const onlyNumber: Diff<string | number | boolean, string | boolean> = 1; // only number is diferent thatn string | boolean

type Filter<T, U> = T extends U ? T : never; // Remove types from T that are not assignable to U

//const onlyString2: Filter< boolean, string | number> = 'hello'; // error because boolean is not assignable to string | number
const onlyString2: Filter<string | boolean | number, string | number> = 'hello'; // result is string because string is assignable to string | number and boolean not

type NonNull<T> = Diff<T, null | undefined>; // Remove null and undefined from T

const notNull: NonNull<string | null | undefined> = 'hello'; // result is string because null and undefined were filtered out
//const failNotNull: NonNull<null | undefined> = null; // The result is never because null | undefined are assignable to null | undefined
