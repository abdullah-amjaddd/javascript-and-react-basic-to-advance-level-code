//destructing objects
let course={course_name:"Javascript Mastery",course_instructor:"Abdullah",course_Price:999}
//it is frustrating to add . everytime you are printing a value of a key so below syntax is very clean
const {course_instructor}=course
console.log(course_instructor);//syntax const or let {valuetobeextracted}:objectvariable
const {course_name}=course
console.log(course_name)
//thats how we can destructure any value of the object if i think that course_instructor is also big then i can destructure it into more shortable form like this
const {course_instructor:instructor}=course
console.log(instructor);//now name is destructured into more shortable form
