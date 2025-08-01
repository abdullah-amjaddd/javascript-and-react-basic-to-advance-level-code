 let a=20//scope of this variable a is global can be accessible anywhere
 if(true){
 let b=20//the b variable is local scoped cannot be accessible outside the curly braces
 }
 console.log(a);//a is printed because it is global scoped
 console.log(b);//error b is not defined 
//problem with var keyword declaration example below
 if(true){
 let firstvariable=10
 const secondvariable=20
 var thirdvariable=30
 }
 console.log(thirdvariable);//this variable is printed despite of being local scoped thats why var keyword is avoided because of scope leakage issues
//scope level and mini hoisting in javascript
 function one(){
 const username = "abdullah"
 function two(){
 const website = "www.google.com"
 console.log(username);
 }
 console.log(website);
 two()
 }
 one()
//above is an example of a closure where the child function can access the variable of parent function but parent function cannot access and print the variable of a child function
//example of hoisting function declaration and function expression
greet();//function call at the top
function greet(){
console.log("hello!");
}//this code will work in function declaration case
compliment();
let compliment=function(){
console.log("You are a good chef!");
}//this is function expression hoisting will not work in this case twe will have error like ReferenceError: Cannot access 'compliment' before initialization