//immediately invoked function expression in js
//iife is used to execute the function immediately and avoid polluting the global scope and keep the variable private
// (function iife(myname){
// console.log(`I am an iife ${myname}`);
// })("Abdullah")
/*syntax of iife like this (functionkeyword nameoffunction(parameters){blockofcode})(arguments)
the first parenthesis turn the function into an expression and the second parenthesis executes it immediately */
//common mistake people make in iife below
(function iife2(myname2){
console.log(`Hey this is an second iife ${myname2}`);
})("adil");//most of the people forget the semi colon here then write another iife then encounter error must put a semicolon after writing an iife
(function iife3(myname3){
    console.log(`Hey this is third iife after semi colon ${myname3}`);    
})("Aslam")
//syntax of iife with arrow function ((parameter)=>)(argument)

