// 1. Create a variable using const and store your college name. Print it
// const name="Geeta"
// console.log(`My college name is ${name}`)

// 2. Create a variable using let and update its value three times
// let age=20
// console.log(`My age is ${age}`)
// age=21
// console.log(`My age is ${age}`)
// age=22
// console.log(`My age is ${age}`)


// 3. Create a block using {} and show that a variable declared with let cannot be accessed
// outside it.
// {let message="Hello"
// {
//     console.log(message)
// }}
// console.log(message)

// 4. Write a program to swap two numbers using array destructuring.
// let a=5;
// let b=10;
// [a,b]=[b,a]
// console.log(`a=${a} and b=${b}`);

// 5. Create an arrow function that returns the cube of a number.
// let a=[1,2,3]
// let cube=a.map((num)=>num**3);
// console.log(cube);

// 6. Create an arrow function to check whether a number is even or odd.
// let a=7;
// let check=(num)=>num%2==0?"even":"odd";
// console.log(check(a));


// 7. Create an arrow function that finds the maximum of three numbers.
// let d=[5,10,15]
// let max=(num)=>num[0]>num[1]&&num[0]>num[2]?num[0]:num[1]>num[0]&&num[1]>num[2]?num[1]:num[2]
// console.log(max(d));


// 8. Given an array:
// const nums = [10, 20, 30, 40, 50];
// Use destructuring to get first, second and remaining values.
// let nums= [10, 20, 30, 40, 50];
// let[f,s,...r]=nums
// console.log(`first=${f}, second=${s}, remaining=${r}`)


// 9. Create a function that receives a user's name and age and returns: "Hello Ram, you
// are 25 years old." using template literals.
// const NAME="Ram"
// const AGE=25
// console.log(`Hello ${NAME},you are ${AGE} years old.`)



// 10. Generate the following URL dynamically: "/api/users/101" using template literals.
// const id=2
// const url=`/api/user/${id}`
// console.log(url)



// 11. Create an object and destructure all properties:
// const student = {
// name: "Ram",
// age: 25,
// course: "MERN"
// };
// const student={
//     name: "Ram",
//     age:25,
//     course:"MERN"
// }
// let{name,age,course}=student
// console.log(`Name:${name}, Age:${age}, Course:${course}`)



//12. Rename course to technology while destructuring.
// const person={
//     name:"ram",
//     course:"bca"
// }
// let{name,course:technology}=person
// console.log(`Name:${name}, Technology:${technology}`)   

// 13. Create a function with a default parameter: createUser(name, role="Student")

// function createUser(name, role="Student"){
//     return `Name:${name}, Role:${role}`
// }


// 14. Create a calculator function where the operation defaults to "add"
// function calculator(a,b,operation="add"){
//     if(operation=="add"){
//         return a+b   
//     }
//     else if(operation=="subtract"){
//         return a-b
//     }
//     else if(operation=="multiply"){
//         return a*b
//     }
//     else if(operation=="divide"){
//         return a/b
//     }
//     else{
//         return "Invalid operation"
//     }
// }





// 15. Create a function that receives unlimited numbers and returns their sum using the Rest
// Operator.
// function sum(...numbers){
//     return numbers.reduce((acc,num)=>acc+num,0)
// }
// console.log(sum(1,2,3,4,5))  



// 16. Create a function that receives unlimited numbers and returns the largest number
// function largest(...numbers){
//     return Math.max(...numbers)
// }
// console.log(largest(1,2,3,4,5))



// 17. Merge two arrays using the Spread Operator:
// JavaScript
// JavaScript
// JavaScript
// None
// const frontend = ["HTML", "CSS"];
// const backend = ["Node", "Express"];



// const fr = ["HTML", "CSS"];
//  const ba = ["Node", "Express"];
// const merg=[...fr,...ba]
// console.log(merg)


// 18. Copy an array using the Spread Operator and add one extra value
// const arr=[1,2,3]
// const copy=[...arr,5]
// console.log(copy);



// 19. Copy an object and update only the email property.
// const user={
//     name:"ram",
//     email:"ram2@gmail.com"

// }
// const updat ={...user,email:"ram3@gmail.com"}
// console.log(updat)



// 20. Create a product object and create a new object with an added discount field using
// the Spread Operator.
// const product={
//     name:"laptop",
//     price:75000
// }
// const dis={...product,dis:"10%"}
// console.log(dis)


// 21. Use map() and an arrow function to return only names from the given array:
// const users = [
// { name: "Ram", age: 25 },
// { name: "Mohan", age: 30 },
// { name: "Amit", age: 22 }
// ];
// const names = users.map(user => user.name);
// console.log(names);


// 22. Use filter() to get users whose age is greater than 24.
// const users = [
// { name: "Ram", age: 25 },
// { name: "Mohan", age: 30 },
// { name: "Amit", age: 22 }
// ];
// const filteredUsers = users.filter(user => user.age > 24);
// console.log(filteredUsers);




// 24. Create a function createInvoice(customerName, amount) and return a formatted
// string using template literals.
// function createInvoice(customerName, amount){    
//     return `Customer Name: ${customerName}, Amount: ${amount}`
// }
// console.log(createInvoice("Ram", 5000))



// 25. Mini Challenge
// Given the student object:
// Using Destructuring, Arrow Functions, Rest/Spread, and Template Literals, calculate the
// total marks and average, then print:
// Student: Ram
// Total: 325
// const student = {
// name: "Ram",
// marks: [80, 90, 70, 85]
// };
// const calculateTotalAndAverage = (student) => {
//     const { name, marks } = student;
//     const total = marks.reduce((acc, mark) => acc + mark, 0);
//     const average = total / marks.length;
//     return `Student: ${name}\nTotal: ${total}\nAverage: ${average}`;
// }   
// console.log(calculateTotalAndAverage(student));