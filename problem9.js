// Problem 09: Find the Maximum Number
const findMax=(a,b,c)=>{
if(a > b && a > c){
  return a
}
else if(b>c){
  return b
}
else{
  return c
}
}
console.log(findMax(50, 20, 10)); // 50
console.log(findMax(10, 60, 30)); // 60
console.log(findMax(10, 20, 70)); // 70