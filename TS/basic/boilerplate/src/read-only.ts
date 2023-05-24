function reverseSorted(input: readonly number[]): number[] {
  // return input.sort().reverse();  // error
  return input.slice().reverse(); // error
}
