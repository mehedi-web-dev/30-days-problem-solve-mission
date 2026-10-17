// Problem 16: Find a User by ID
type User = {
  id: number;
  name: string;
};

const users:User[] = [
  { id: 1, name: "Mehedi" },
  { id: 2, name: "Rahim" },
  { id: 3, name: "Karim" },
  { id: 4, name: "Hasan" }
];
 const findUser=users.find(user=>user.id===3);
 console.log(findUser);