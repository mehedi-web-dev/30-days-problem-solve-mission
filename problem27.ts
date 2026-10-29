//Problem 27: Check Age Using Async/Await

const checkAgees = async (age: number): Promise<string> => {
   if (age >= 18) {
     return "Age is valid!";
   } else {
     return "Age is too low!";
   }
};

const main = async (): Promise<void> => {
  const result1 = await checkAge(22);
  console.log(result1);

  const result2 = await checkAge(15);
  console.log(result2);
};

main();