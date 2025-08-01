//objects in javascript.there are two ways in which object is declared 1)object literal declaration 2)object construtor declaration below is the object literal declaration
 let myobj={name:"Adil",age:18,City:"Karachi",favsports:{First:"Cricket",Second:"Snooker",Third:"Football"}
 }//so object works on key value pair and we can also give object and function as key of the object
//accessing objects
 console.log(myobj.name,myobj.age,myobj.City,myobj.favsports.First);//first way of accessing object in js
//usually we access the value writing variablename.key and then we get value as output but there is another way.remember that js engine convert the key to a string like name is converted to "name"
 console.log(myobj["favsports"]);//this is called square notation way remember that the key should be written in "" as a string while accessing value using square notation
 let mysym=Symbol("key")
 let myobj2={[mysym]:"key"}
 console.log([mysym])
 console.log(typeof mysym)
//overwriting values of object 
 let myobj3={email:"abdullah@google.com"}
 Object.freeze(myobj3)
 myobj3.email="abdullah@chatgpt.com"//the email is overwritten if you want your email not to be changed then you can use freeze function
 console.log(myobj3);
//declaring functions in object datatype
 let myobj4={myname:'Aslam',age:'18',City:'kohat'}
 myobj4.greeting=function(){
     console.log(`hello user ${this.myname} how are you`)//this used after dollar sign is used to refer object values and you can print it with the help of this
 }
 console.log(myobj4.greeting());
let myobj5={myname:'Amir',age:'18',town:'bahadurabad'}
myobj5.greetingtwo=function(){
console.log(`Hello ${this.myname} heard that you are living in ${this.town} recently`);
}
console.log(myobj5.greetingtwo());
//remember that we mostly use . to access values of object but in most cases we have to use square notation for example in symbol data type case must see above code and if you define key in "" then there is no chance you can access it using .


