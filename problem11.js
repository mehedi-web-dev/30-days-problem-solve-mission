// Problem 11: Find the Largest Number in an Array
const numbers = [12, 45, 7, 89, 34, 67];
let maxNum=numbers[0]
for (let i=1;i<numbers.length;i++){
     if(numbers[i]>maxNum){
     maxNum=numbers[i];
     }
}
console.log(maxNum);