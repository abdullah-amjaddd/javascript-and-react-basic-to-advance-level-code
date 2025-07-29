/*based on how data is stored in the memory and how we access the data from the memory,data types are categorized into two types
.primitive(Call by value)
there are seven primitive data types in js Number,strings,boolean,null,undefined,symbol,BigInt(used for big numbers)
.non-primitive(Call by reference) there are three non-primitive data types in js arrays,objects,functions
remember that js is a dynamically typed language you didnt need to specify the data type while declaring the variable*/
let num=10 //number
let str="Abdullah"//string
let isgraduated=true //boolean
let outsidetemp=null;//null
let programmer=undefined;//undefined
let id=Symbol(123)//symbol data type
let bignum=123485858585484n
//non-primitive below
let arr=[10,20,30,40,50]//array data type
let myObj={
Myname:"Abdullah",//object
Age:18,
City:"Karachi",
isteenager:true,
}
let myfunction=function(){
console.log("Hello!world");
}
console.log(typeof myObj)//will return object
console.log(typeof arr)//will return object
console.log(typeof bignum);//will return bigint
console.log(typeof outsidetemp);//will return object because null datatype returned is object
console.log(typeof id);//will return symbol
console.log(typeof myfunction);//will return function


