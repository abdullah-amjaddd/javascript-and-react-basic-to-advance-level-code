//strings in js
let myname="Abdullah"
let myage=19
//below is the modernized approach to write string `->backticks and $->dollarsign
console.log(`My name is ${myname} and i am ${myage} years old`)
//important strings method/functions
console.log("  Hello!world   ".trim())//removes whitespaces in the string
console.log("helloworld".toUpperCase())//converts the lowercase characters to uppercase
console.log("helloworld".toLowerCase())//converts the uppercase characters to lowercase
console.log("My name is Abdullah Amjad".substring(3,8))//return the substring of a string
console.log(myname.charAt(3))//returns the character at the index written by programmer in parenthesis
console.log(myname.indexOf('a'))//returns the index at which the specified character is placed
console.log("hello world".includes("world"));//returns true if string contains world as substring
console.log(myname.length)//returns the length of the string
console.log(myname.lastIndexOf('l'));//returns the last index of the substring means last l index os given
console.log("JavaScript".slice(0,4));//return the sliced part of the string
console.log("helloworld".replace("world","javascript"))//replace the world with the javascript
console.log("apple,banana,orange".split(","));//splits string into an array
let firstname="Abdullah"
let lastname="Amjad"
console.log(firstname.concat(lastname));//concatenate the two strings
console.log("ha".repeat(3));//repeat the string n number of time






