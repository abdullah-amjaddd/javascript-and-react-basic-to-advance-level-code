// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2===1);
// console.log(2!=1);these are the basic comparison of the same data type now below are the absurd comparison comparing operands of different data type
console.log("2" > 1);
console.log("2" < 1);
console.log("2" >= 1);
console.log("2" <= 1);
console.log("2" == 1);
console.log("2" === 2);//still returns false bcz of strict equality operator
console.log("2" != 1);
//in these comparison javascript automatically converts the string to an number data type such that both operands data type will match except the ===(strict equality operator) which compares the data type as well as if both data types doesnt match then it return false
console.log(null >0);//return false
console.log(null ==0);//return false
console.log(null >=0);//return true because null is converted to an number which is greater than or equal to 0
console.log(undefined >0);
console.log(undefined ==0);
console.log(undefined >=0)//all three undefined comparison will return false

