//if statements
 let money=100
 if(money>50){//if this condition is true then this block is executed
 console.log("I can buy a packet of chips");
 } else if(money>20){//if this else if condition is true then this block is executed
     console.log("I can buy a chocolate ");
 } else {//this will execute if all the above conditions are false
     console.log("I can buy nothing");
 }
 let isuserloggedin=true
 if(isuserloggedin){
 console.log("Welcome user!")
 let username="Abd"//this variable is only accessible in this block outside it will not be accessible
 }
//switch statement
 let daynumber=4
 switch(daynumber){
 case 1:
     console.log("Saturday");
     break;
     case 2:
     console.log("Sunday");
     break;
     case 3:     console.log("Monday");
     break;
     case 4:
     console.log("Tuesday");
     break;
     case 5:
     console.log("Wednesday");
     break;
     case 6:
     console.log("Thursday");
     break;
     case 7:
     console.log("Friday");
      break;
    default:    
    console.log("Invalid day number");
 }//remember that missing break statement will cause the code to fall through to the next case in this situation if i miss break after case 4 which prints tuesday then wednesday will also be printed which is case 5
//And,Or operations on if statements
 let age=18
 if(age>=18 && age<=60){//this is and operation both conditions must be true
     console.log("You are eligible to vote");
 } else if(age<18 || age>60){//this is or operation at least one condition must be true
     console.log("You are not eligible to vote");
 } else {
 console.log("You are not born");
 }
//truthy values in js:true,{},[],1," "--> string with space, any non-zero number,"false"
//falsy values in js:false,0,null,undefined,"" --> empty string,NaN
//checking if an array and object is empty using if statemen let arr=[];//empty arra if(arr.length===0){//checking if array is empt     console.log("Array is empty")  let obj={}; //empty objec if(Object.keys(obj).length===0){//checking if object is empt     console.log("Object is empty") }
//Nullish coalescing operator is used to provide a default value if the variable is null or undefined
 let userInput=null
 userInput=userInput??10
 console.log(userInput);//will return right operand unless left operand is not null or undefined
//ternary operator in js
let salary=20000
salary<=20000?console.log("Taxes are not eligible due to low salary"):console.log("Taxes are eligible due to high salary");
