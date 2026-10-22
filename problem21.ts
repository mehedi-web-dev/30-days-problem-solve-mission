// Problem 21: Merge Arrays & Collect Arguments
const frontendSkills: string[] = ["HTML", "CSS", "JavaScript"];
const backendSkills: string[] = ["Node.js", "Express"];

const user = {
  name: "Mehedi",
  age: 22,
};

const skill=[...frontendSkills,...backendSkills]
const userInfo={...user,country:"Bangladesh"}

console.log(skill);
console.log(userInfo);