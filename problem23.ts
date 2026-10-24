// Problem 23: Safe User Profile
interface User {
  name: string;
  address: {
    city: string;
  };
  contact: {
    phone?: string;
  } | null;
  age: number;
}

const user: User = {
  name: "Mehedi",
  address: {
    city: "Noakhali",
  },
  contact: null,
  age: 0,
};

console.log(user.name);
console.log(user.address?.city);
console.log(user.contact?.phone ?? "No phone number");
console.log(user.age);

const userName = null;
console.log(userName ?? "Guest");

