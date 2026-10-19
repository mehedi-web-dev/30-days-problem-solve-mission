// Problem 18: Extract Object Information
interface Student{
  name:string,age:number,skills:string[],isDeveloper:boolean
}

const student:Student = {
  name: "Mehedi",
  age: 22,
  skills: ["JavaScript", "TypeScript", "React"],
  isDeveloper: true
};
console.log(student.name);
console.log(student.age);
console.log(student.skills);