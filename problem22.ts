// Problem 22: Generate a User Profile Message

const userInformation = {
  name: "Mehedi",
  age: 22,
  country: "Bangladesh",
  profession: "Web Developer",
};

const completedProjects = 500;

const userFullInfo = `My name is ${userInformation.name}.
 I am ${userInformation.age} years old and live in ${userInformation.country}.
  I work as a ${userInformation.profession}.
  I have completed ${completedProjects}.
  Next year,I will be ${userInformation.age+1} years old`;
console.log(userFullInfo);
