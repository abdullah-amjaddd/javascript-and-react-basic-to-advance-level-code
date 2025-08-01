//objects part 2
 const myobject=new Object()//this is a singleton object
 const myobject2={}//this is non singleton object
 console.log(myobject);//both will produce empty results
 console.log(myobject2);
//below is the nesting of objects
 let fbuser={username:"Abdullah Amjad",age:18,Fullname:{First_name:"Abdullah",Secondary_name:"Amjad"}}
 console.log(fbuser.Fullname.First_name)//thats how you can access the element of nested objects
 let obj1={1:'a',2:'b'}
 let obj2={3:'c',4:'d'}
 Object.assign(obj1,obj2);//syntax Object.assign(target,source) this function returns the target object.//used to copy the elements value from source to target
 console.log(obj1);//now obj1 also contains the element of obj2
//but the most used way to merge two objects is ...spread operator
 let obj3={Total_marks:550,obtained_Marks:480}
 let obj4={EnglishMarks:75,Mathematics:78}
 let obj5={...obj3,...obj4}
 console.log(obj5);//now both the objects are merged just like the array
//creating an array of objects below
let object6={Nationality:"United Kingdom",Salary:125000,Face_color:"white"}
console.log(Object.keys(object6))//return the keys of the object only
 console.log(Object.values(object6));
 console.log(Object.entries(object6));//makes an array of every key:value pair and seperate them with a comma
console.log(object6.hasOwnProperty('Face_color'))//this function checks if the property exist in that object

