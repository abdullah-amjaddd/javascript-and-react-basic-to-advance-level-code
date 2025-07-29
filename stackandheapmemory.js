//stack memory works on primitive data type like numbers,string,boolean.we know that in primitive data type a local copy of a variable is passed to another variable such that changes made in the value of a variable will not reflect the other original variable example below
let num1=10
num2=num1//local copy of num1 is passed to num2
num2=12//num2 modify its value
console.log(num1);//num1 retain its value 10 is printed
console.log(num2);//only change is reflected inside num2 output 12
//heap memory works on non-primitive data type like arrays,objects,functions.we know that in non-primitive data type the address of the variable is passed to another variables such that changes made in the value of a variable will modify the original variable as well example below
let myobjectone={Myname:"Abdullah",age:18, city:"Karachi"}
myobjtwo=myobjectone//address is also passed 
myobjtwo.age=19//first object which value is passed to 2nd object will be changed like age is modified from 18 to 19
console.log(myobjectone);//age 19
console.log(myobjtwo);//age19

