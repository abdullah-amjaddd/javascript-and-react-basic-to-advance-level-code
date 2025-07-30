 //dates in javascript
 let todaydate=new Date()
 console.log(todaydate);//gives you the date but in an unformatted manner not recommended
console.log(todaydate.toString());//gives you the time in a standardized and structured manner
 console.log(todaydate.toDateString());
 console.log(todaydate.toISOString());
 console.log(todaydate.toJSON());
 console.log(todaydate.toLocaleDateString());
 console.log(todaydate.toLocaleString());
 console.log(todaydate.toTimeString());
 console.log(todaydate.toUTCString());
//above are all the date and time functions/method now we are creating specific date by myself
 let Birthdate=new Date(2005,5,12,4,30,25)//remember that in arrays month are index based(0-11) 0 is for january 4 is hours,30 is for minutes,25 is for seconds
 console.log(Birthdate.toString());
 let mycreatedDate=new Date("07-30-2025")//mm//dd//yy format 
 console.log(mycreatedDate.toLocaleDateString());
 let timestamp=Date.now();
console.log(timestamp);//give the date in millisecond from 1970
 console.log(mycreatedDate.getTime());//we get another value in millisecond
//to convert date value in millisecond below is the syntax
 console.log(Math.floor(Date.now()/1000));//now we will get much smaller value compared to that
let newdate=new Date("07-30-2025")
console.log(newdate.toLocaleString('default',{weekday:'long'}));//that way we can customize the date




