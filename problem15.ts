// Problem 15: Calculate the Sum of Array Elements
const numbers:number[] = [5, 10, 15, 20, 25];
const sumNumber:number=numbers.reduce((sum,num)=>sum+num,0)
console.log(sumNumber);