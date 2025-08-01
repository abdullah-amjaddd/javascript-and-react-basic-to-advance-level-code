//functions in js
 function sumoftwonum(num1,num2){//the value in parenthesis of the function are the parameters
 return num1+num2 //return statement
 }
 console.log(sumoftwonum(10,19));//the value in the parenthesis when function is called is arguments
 function even_Oddchecker(num1){
 if(num1%2==0){
 console.log(`${num1} is an even number`)
 } else {
 console.log(`${num1} is an odd number`);
 }
 }
 let number=13
 even_Oddchecker(number)
//finding factorial of a number
 function factorial(number1){
     let fact=1
 for (let i = 1; i <= number1; i++) {
     fact*=i
 }
 return fact
 }
 console.log(factorial(7))
//passing objects and array to functions
function passingobj(user){
console.log(`My name is ${user.myname} and my age is ${user.Age} and i am currently living in ${user.City} city`)
}
let myobj1={myname:"Abdullah",Age:18,City:"Karachi",isStudent:true}
passingobj(myobj1)//function call
//another way of passing object in function
function passingobj2(info){
console.log(info.myname,info.age,info.city);

}
passingobj2({myname:"sameer",age:19,city:"delhi"})
//passing array to functions
function returnsecondvalueofarray(parameterarray)
{
return parameterarray[1]
}
let array=[10,20,30,40,50]
console.log(returnsecondvalueofarray(array))
//we can also pass arguments like this
function returnthirdvalue(thirdvalue){
return thirdvalue[2]
}
console.log(returnthirdvalue([100,200,300,400,500]))