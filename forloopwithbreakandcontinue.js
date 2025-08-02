//for loops in javascript
 for(let i=1;i<=10;i++){
 console.log(`The value of i is ${i}`);
 }
// nested for loops
 for(let i=1;i<2;i++){
 for(let j=1;j<=10;j++){
 console.log(`The value of i is ${i} and j is ${j}`);
 }
 }
//writing a multiplication table of number from 1 to 10 using for loop
 for(let i=1;i<=10;i++){
 for(let j=1;j<10;j++){
 console.log(`${i} * ${j} = ${i*j}`) }
 }
// *
// * *
// * * *
// * * * *
// * * * * * printing right angled triangle (half pyramid for (let i = 1; i <= 5; i++)    let row = ""   for (let j = 1; j <= i; j++)      row += "* "      console.log(row) }
// * * * * *
// * * * *
// * * *
// * *
// * inverted right angle triangle
 for (let i = 5; i >= 1; i--) {
   let row2 = "";
   for (let j = 1; j <= i; j++) {
     row2 += "* ";
   }
   console.log(row2);
 }
//break in loops
 for(let a=1;a<11;a++){
     if(a==4){
     console.log(`${a} is encountered jumping out of the loop`);
     break;
     }
 console.log(a)
 }
//continue in loops
 for(let a=1;a<11;a++){
     if(a==4){    
     console.log(`skipping ${a} because continue statement is used rest will be printed`);
     continue;
     }
 console.log(a)
 }
let x=10
console.log(`this is ${x}\n ${++x} `)