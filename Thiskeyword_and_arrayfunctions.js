//this keyword refers globally to an empty object below is an example
console.log(this);
//if a function is defined inside an object then this used in that function directly refers to the object below is the example.in simpler terms this refers to current context values 
let myobj={name:"Abdullah",age:18,greet:function(){
console.log("hello"+this.name);//here this is refering to myobj named object

}}
myobj.greet();
//arrow function syntax ()=>{}
    let arrow=()=>{
    console.log("Hello this is an arrow function")
    }
    arrow()
    let addTwonum=(num1,num2)=>{
   return num1+num2
    }
    console.log(addTwonum(7,9));
    //example of implicit return in an arrow function below it means that no return statement is needed as well as curly braces to return a value when a function is called
    let addthreenum=(number1,number2,number3)=>number1+number2+number3
     //let addthreenum=(number1,number2,number3)=>(number1+number2+number3) this is also correct
    console.log(addthreenum(7,9,18))
    //returning an object in an arrow function
     let addfournum=(number1,number2,number3,number4)=>({username:"Abdullah",age:18}) 
     console.log(addfournum(4,8,12,16));
     
