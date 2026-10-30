// Problem 28: Handle Errors in Async Function

const checkAge = async (age: number): Promise<string> => {
  try {
    if (age >= 18) {
      return "Age is valid!";
    }

    throw new Error("Age must be 18 or above!");
  } catch (error) {
    if (error instanceof Error) {
      return `Error: ${error.message}`;
    }

    return "Unknown error";
  }
};

const mains = async (): Promise<void> => {
  const result1 = await checkAge(22);
  console.log(result1);

  const result2 = await checkAge(15);
  console.log(result2);
};

mains();
