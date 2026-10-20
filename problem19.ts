// Problem 19: Filter Products by Price
interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Keyboard", price: 1200 },
  { id: 2, name: "Mouse", price: 500 },
  { id: 3, name: "Monitor", price: 12000 },
  { id: 4, name: "Headphone", price: 1500 },
];

const product = products.filter((product) => product.price > 1000);
console.log(product);
