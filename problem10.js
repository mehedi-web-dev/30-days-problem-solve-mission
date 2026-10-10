// Problem 10: Scope Checker
let name = "Mehedi";

function showInfo() {
  let age = 25;

  if (true) {
    let city = "Dhaka";
    console.log(name);
    console.log(age);
    console.log(city);
  }

  console.log(age);
}

showInfo();