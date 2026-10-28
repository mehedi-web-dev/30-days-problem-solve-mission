//Problem 26: Create a Promise

const checkAge = (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age>=18){
      resolve('Age is valid')
    }
    else{
      reject("Age is too low!");
    }
  });
};

checkAge(22)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

checkAge(15)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });