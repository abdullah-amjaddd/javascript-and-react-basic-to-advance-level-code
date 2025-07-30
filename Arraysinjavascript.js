//array
let arr=[10,20,30,40,50,60]
let arr2=new Array(12,24,36,48,60)//two ways of declaring and initializing arrays
// console.log(arr);
// console.log(arr2);
//accessing elements in arrays.arrays start from zero index and can store multiple elements under a single variable name.array copy operation produce a shallow copy means the properties share the same reference
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
//Array methods/Functions
// arr.push(70,80,90)//adds new elements to the array
// // console.log(arr);
// arr.pop()//removes the ;ast element of the array
// console.log(arr);
// arr.unshift(5,8,13)//adds new element at the start of the array not at the end like push
// // console.log(arr);
// arr.shift()//shift is used to remove the starting element added at the start with the help of unshift
// console.log(arr);
// console.log(arr.join(','))//converts the array to the string and seperate the elements by a seperator inserted in the parameter of the function
// console.log(typeof arr);
// console.log(arr.includes(10))//returns true if the element is there in the array
// console.log(arr.indexOf(30));//returns the index of the element,return -1 if element is not found
console.log(arr.slice(0,4))//extracts a section of the string but don't include the ending value giving in the parameter also it did'nt modify the original array
console.log("A",arr);
console.log(arr.splice(0,4))//extracts a section of the string and didnt include the ending value as well giving in the parameter also the major difference between splice and slice is that splice modify the original array as well cutting the value specified in the array
console.log("B",arr)//50 60 printed  cutting values from 0 index to 3

