//for of loop is used to iterate over a sequence of values sourced from an iterable objects.the iterable object can be string or an array and many more.No condition and increment
// let array=[10,20,30,40,50]
// for(let element of array){
// console.log(element);
// }
// let str="Abdullah"
// for(let character of str){
// console.log(character);
// }
//map data type is an object data type that holds key value pair.The key should be unique
let map=new Map()
map.set('Name','Abdullah')
map.set('Age',18)
map.set('City','Karachi')
map.set('Name',"Adil")//overwrite the previous value of the same key
map.set('City','Karachi')//will not be printed again because in mapping if same key and value is written again then it is not printed
for(let [keys,value] of map){
// console.log(`${keys}:-${value}`)
}//this way you can iterate over map objects key and value
//we cannot iterate an object using for of loop we use for in loop for that 
let myobj={Cpp:"C++",Js:"Javascript",Py:"Python",C:"C language",R:"Rubyonrails"}
for(let keys in myobj){
// console.log(`${keys} and its value is ${myobj[keys]}`);
}//this is the syntax to iterate objects using for of loop
//for in is used to iterate the indexes of array but not the elements/values
let Horrormov=['Insidious','Conjuring','Annabelle','Sinister']
for(let keys in Horrormov){
// console.log(`${keys}`);//will return the index of the elements 0 1 2 3
}
//map is not iterable using for in loops
//for each loops in js are most commonly used loops
let fruits=["Apple","Banana","Orange","Berries"]
fruits.forEach(function(item,index,array){
// console.log(item,index,array);
})//will print the index and item as well as whole array below is the output
/*Apple 0 [ 'Apple', 'Banana', 'Orange', 'Berries' ]
Banana 1 [ 'Apple', 'Banana', 'Orange', 'Berries' ]
Orange 2 [ 'Apple', 'Banana', 'Orange', 'Berries' ]
Berries 3 [ 'Apple', 'Banana', 'Orange', 'Berries' ]
*/
//accessing values of arrays having multiple objects
let arrayofobj=[{language:"Python",filename:"py"},{language:"Javascript",filename:"js"},{language:"C++",filename:"Cpp"}]
arrayofobj.forEach(function Name(item){
console.log(item.filename);
})