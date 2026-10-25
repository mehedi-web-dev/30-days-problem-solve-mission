// Problem 24: Create a Higher-Order Function

const personName = "Mehedi";

// একটি সাধারণ function
const makeUppercase = (name: string): string => {
  return name.toUpperCase();
};

// Higher-Order Function
const processName = (
  name: string,
  callback: (name: string) => string,
): string => {
  return callback(name);
};

// Function call
console.log(processName(personName, makeUppercase));