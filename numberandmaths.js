 let num=23.896
// //some function for number below
 console.log(num.toPrecision(4))//returns 23.90
let num1=250.465
console.log(num1.toPrecision(3));//returns 250 because above .50 can be increase to 1 digit and less than 0.50 will decrease by 1 digit
let number=new Number(250)//anotherway of declaring and initializing a number
 let value=256
 console.log(value.toFixed(2));//how much fractional digits you want after the decimal
 console.log(value.toString().length);//now 256 will be converted to a string
 console.log(typeof(value));

 let amount=1000000
console.log(amount.toLocaleString('en-IN'));//now number will be in readable form
//Math library in javascript below
console.log(Math.pow(5,2))//first value is base and second is exponent returns the power
console.log(Math.sqrt(4));//return the square root of 2
console.log(Math.abs(-4));//convert the sign to positive from negative
console.log(Math.round(4.4555));//round off the value to a precise value
console.log(Math.ceil(4.2));//always return the top value while rounding off
console.log(Math.floor(4.7));//always return the lowest value while rounding off
//among all these three we mostly use round off 
console.log(Math.max(4,10,100,90,24));//return the maximum element in the array
console.log(Math.min(4,10,100,90,24));//return the minimum element in the array
//below is the most used mathematical function often used while making random number generator and dice games where number ranges from 1 to 6
console.log(Math.random());//generates a random number between 0 to 1 like 0.345
console.log((Math.random()*10)+1);//if we want to generate a random number between 1 to 9 we multiply the random number generated with 10 to shift the decimal point to shift one bit to the right and +1 for safer side to avoid 0 case if we get a random number generated 0.04 then x10=0.4+1=1.4 so we avoided the zero case by just adding 1 below is a short tip for this type of function when max and min value is specified
let min=10
let max=20
console.log(Math.floor((Math.random()*10+1)+min));//this is the formula












