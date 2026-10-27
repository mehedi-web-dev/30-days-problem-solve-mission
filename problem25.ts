//Problem 25: Calculator Using Callback

const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

// এই function-টি সম্পূর্ণ করো
const calculate = (
  a: number,
  b: number,
  callback: (a: number, b: number) => number,
): number => {
  return callback(a, b);



};

console.log(calculate(20, 10, add));
console.log(calculate(20, 10, subtract));