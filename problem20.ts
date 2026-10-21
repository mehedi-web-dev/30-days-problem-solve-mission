// Problem 20: Object & Array Destructuring
const student = {
  name: "Mehedi",
  age: 22,
  country: "Bangladesh",
};

const skills: string[] = ["JavaScript", "TypeScript", "React"];

const { name: studentName, age, country } = student;
const [first,second]=skills

console.log(studentName);
console.log(age);
console.log(country);
console.log(first);
console.log(second);