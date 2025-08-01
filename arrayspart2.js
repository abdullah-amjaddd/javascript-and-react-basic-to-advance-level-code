//part 2 of array
 let arr1=[10,20,30,40,50,]
 let arr2=[60,70,80,90,100]
 arr1.push(arr2)//now arr2 is stored in arr1 as a single element so we can access the whole array 2 by giving itsindex as 5 then whole array is printed
 console.log(arr1);
 console.log(arr1[5]);//but if we want to access the values of arr 2 we can write this syntax
 console.log(arr1[5][1]);//means 5th index ki 1st index wali value print krdo
//to merge string properly we use concat() function because it returns an new array unlike push who do operation on the existing array
 let favmovie=["Conjuring","Pianist","Mirzapurwebseries","Hostel"]
 let disgustingmovie=["Lightsout","stree2"]
 let combinearray=favmovie.concat(disgustingmovie)
 console.log(combinearray);//now both the array merges into an new array 
//another method which is more popular among all is using spread operator ...
 let favplayer=["Virat kohli","Jacques Kallis","Ricky Ponting"]
 let favplayer2=["Joe Root","Kane Williamson","Martin Guptill"]
 let mergearray=[...favplayer,...favplayer2]
 console.log(mergearray);
//another way when we have multiple array nested then we can use flat function
 let array=[1,2,3,4,[5,6,[7,8]]]
 let usingflat=array.flat(2)//syntax flat(depth)
 console.log(usingflat);
 console.log(Array.isArray(["Abdullah","Amjad"]))//checks if the parameter inserted is an array or not if yes then return true
 console.log(Array.from("Abdullah"))//converts the parameter to an array
console.log(Array.from({Name:"Abdullah",Age:19,City:"Karachi"}));//gives an empty array while comverting object to array using from this is an interesting case
 lescore1=100
 let score2=200
 let score3=300
 console.log(Array.of(score1,score2,score3));//this also convert the single variables into an array

